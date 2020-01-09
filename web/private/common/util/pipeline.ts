
MiaokitJS.ShaderLab.Pipeline = {
    "_name": "Pipeline",

    ColorTarget: [null,
        /// 1.���Ʋ�͸��������ɫ����;
        { ID: 1, Format: "RGBA32_FLOAT" },
        /// 2.����͸��������ɫ����
        { ID: 2, Format: "RGBA32_FLOAT" }
    ],

    DepthTarget: [null,
        /// 1.����������Ȼ���
        { ID: 1, Format: "D16_UNORM" }
    ],

    RenderTarget: [null,
        /// 1.��͸��������ȾĿ��
        { ID: 1, ColorTarget: 1, DepthTarget: 1 },
        /// 1.͸��������ȾĿ��
        { ID: 1, ColorTarget: 2, DepthTarget: 1 }
    ],

    BlendState: [
        /// 0.�����û��
        { ID: 0, Enable: false },
        /// 1.���û�ϣ����ڻ���͸������
        { ID: 1, Enable: true, ColorOP: "Add", AlphaOP: "Add", ColorSrc: "One", ColorDest: "One", AlphaSrc: "One", AlphaDest: "One" }
    ],

    DepthState: [
        /// 0.��������Ⱥ�ģ�����
        { ID: 0, Enable: false },
        /// 1.������Ȳ��ԣ��������д��
        { ID: 1, Enable: true, Write: true, TestOP: "LessEqual" },
        /// 2.������Ȳ��ԣ��ر����д��
        { ID: 2, Enable: true, Write: false, TestOP: "LessEqual" }
    ],

    Pass: [
        {
            Name: "���Ʋ�͸������",
            Type: "Render",
            Mask: ["Opaque"],
            Target: 1,
            ClearTarget: {
                Color: { r: 0.198, g: 0.323, b: 0.561, a: 1.0 },
                Depth: 1.0,
                Stencil: 0.0
            },
            Depth: 1,
            Blend: 0
        },
        {
            Name: "����͸������",
            Type: "Render",
            Mask: ["Transparent"],
            Target: 1, // 2
            Depth: 2,
            Blend: 1
        },
        {
            Name: "�ϳ�ͼ��",
            Type: "Postprocess",
            Mask: [],
            Target: 0,
            Depth: 1,
            Blend: 0,
            Shader: "Present",
            SetUniforms: function (pUniforms) {
                pUniforms.u_MainTex = MiaokitJS.ShaderLab.Pipeline.ColorTarget[1].Texture;
            }
        }
    ],

    InternalShader: [
        "Default", /*00*/ "Wall", /*01*/ "Default", /*02*/ "Default", /*03*/
        "Default", /*04*/ "Default", /*05*/ "Default", /*06*/ "Default", /*07*/
        "Default", /*08*/ "Default", /*09*/ "Default", /*10*/ "Default", /*11*/
        "Default", /*12*/ "Default", /*13*/ "Default", /*14*/ "Present"  /*15*/
    ]
};


MiaokitJS.ShaderLab.Shader["Common"] = {
    code_vs: `
precision highp float;

attribute vec3 a_Position;
attribute vec3 a_Normal;
attribute vec2 a_UV;
attribute vec4 a_Color;
attribute vec4 a_Tangent;
attribute vec4 a_Binormal;
attribute vec2 a_UV2;

uniform mat4 u_MatW;
uniform mat4 u_MatVP;
uniform mat4 u_MatWVP;

varying vec3 v_Position;
varying vec3 v_Normal;
varying vec2 v_UV;
varying vec4 v_Color;
varying vec4 v_Tangent;
varying vec4 v_Binormal;

/// ����ռ�����ת����ռ�����
vec3 ObjectToWorldPos(vec3 i_Position)
{
    return (u_MatW * vec4(i_Position, 1.0)).xyz;
}

/// ����ռ�����ת�ü��ռ�����
vec4 ObjectToClipPos(vec3 i_Position)
{
    return u_MatWVP * vec4(i_Position, 1.0);
}
        `,
    code_fs: `
precision highp float;

uniform mat4 u_MatW;
uniform mat4 u_MatVP;
uniform mat4 u_MatWVP;
uniform sampler2D u_MainTex;

varying vec3 v_Position;
varying vec3 v_Normal;
varying vec2 v_UV;
varying vec4 v_Color;
varying vec4 v_Tangent;
varying vec4 v_Binormal;

/// ����ռ�����ת����ռ�����
vec3 ObjectToWorldPos(vec3 i_Position)
{
    return (u_MatW * vec4(i_Position, 1.0)).xyz;
}

/// ����ռ�����ת�ü��ռ�����
vec4 ObjectToClipPos(vec3 i_Position)
{
    return u_MatWVP * vec4(i_Position, 1.0);
}

/// ����2D����
vec4 Tex2D(sampler2D i_Tex, vec2 i_UV)
{
    i_UV.x = fract(i_UV.x);
    i_UV.y = fract(1.0 - i_UV.y);

    return texture2D(i_Tex, i_UV);
}

float DefaultLight(vec3 v_Normal)
{
    vec3 _Normal = normalize(v_Normal);
    vec3 _Light = normalize(vec3(2.0, 3.0, 1.0));

    return clamp(dot(_Normal, _Light), 0.0, 1.0) + 0.2;
}
        `
};

MiaokitJS.ShaderLab.Shader["Default"] = {
    mark: ["Opaque"],
    code_vs: `
void main()
{
    gl_Position = ObjectToClipPos(a_Position.xyz);
    v_Normal = a_Normal;
    v_UV = a_UV;
}
        `,
    code_fs: `
void main()
{
    gl_FragColor = Tex2D(u_MainTex, v_UV);
    gl_FragColor.rgb *= DefaultLight(v_Normal);
    gl_FragColor.a = 1.0;
}
        `
};

MiaokitJS.ShaderLab.Shader["Wall"] = {
    mark: ["Transparent"],
    code_vs: `
void main()
{
    gl_Position = ObjectToClipPos(a_Position);
    v_Normal = a_Normal;
    v_UV = a_UV;
}
        `,
    code_fs: `
void main()
{
    gl_FragColor = vec4(0.0196, 0.6431, 0.9294, 1.0);
    gl_FragColor.rgb *= DefaultLight(v_Normal);
    gl_FragColor.a = 1.0;
}
        `
};

MiaokitJS.ShaderLab.Shader["Present"] = {
    mark: ["Opaque"],
    code_vs: `
void main()
{
    gl_Position = vec4(a_Position, 1.0);
    v_UV = a_UV;
}
        `,
    code_fs: `
void main()
{
    gl_FragColor = Tex2D(u_MainTex, v_UV);
    gl_FragColor /= gl_FragColor.a;
}
        `
};
