// TODO: For some weird reason, when MPA_QML_TEST is defined,
// then we cannot use relative paths to refer to this file within SignIn.js.
// Absolute paths work fine, but are neither friendly to the build server not
// during unit-testing.
//
// The contents of this file should be identical to the one found in the
// parent directory of the directory containing this file.
//
// We could perhaps use symlinks to resolve this issue.

String.prototype.sourceText = function()
{
    return this.m_sourceText ? this.m_sourceText : "";
};

function qxTranslate(context, sourceText)
{
    var translatedString = new String(qsTranslate(context, sourceText));

    translatedString.m_sourceText = sourceText;

    // console.log(translatedString.sourceText() + "->" + translatedString);

    return translatedString;
}

function StringEx(sourceText)
{
    var obj = new String(sourceText);

    obj.m_sourceText = sourceText;

    return obj;
}
