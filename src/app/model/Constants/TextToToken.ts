import { TokenTypes } from './TokenTypes';

export enum TextToToken{
    "abstract" = TokenTypes.AbstractKeyword,
    "any" = TokenTypes.AnyKeyword,
    "as" = TokenTypes.AsKeyword,
    "bigint" = TokenTypes.BigIntKeyword,
    "boolean" = TokenTypes.BooleanKeyword,
    "break" = TokenTypes.BreakKeyword,
    "case" = TokenTypes.CaseKeyword,
    "catch" = TokenTypes.CatchKeyword,
    "class" = TokenTypes.ClassKeyword,
    "continue" = TokenTypes.ContinueKeyword,
    "const" = TokenTypes.ConstKeyword,
    "constructor" = TokenTypes.ConstructorKeyword,
    "debugger" = TokenTypes.DebuggerKeyword,
    "declare" = TokenTypes.DeclareKeyword,
    "default" = TokenTypes.DefaultKeyword,
    "delete" = TokenTypes.DeleteKeyword,
    "do" = TokenTypes.DoKeyword,
    "else" = TokenTypes.ElseKeyword,
    "enum" = TokenTypes.EnumKeyword,
    "export" = TokenTypes.ExportKeyword,
    "extends" = TokenTypes.ExtendsKeyword,
    "false" = TokenTypes.FalseKeyword,
    "finally" = TokenTypes.FinallyKeyword,
    "for" = TokenTypes.ForKeyword,
    "from" = TokenTypes.FromKeyword,
    "function" = TokenTypes.FunctionKeyword,
    "get" = TokenTypes.GetKeyword,
    "if" = TokenTypes.IfKeyword,
    "implements" = TokenTypes.ImplementsKeyword,
    "import" = TokenTypes.ImportKeyword,
    "in" = TokenTypes.InKeyword,
    "infer" = TokenTypes.InferKeyword,
    "instanceof" = TokenTypes.InstanceOfKeyword,
    "interface" = TokenTypes.InterfaceKeyword,
    "is" = TokenTypes.IsKeyword,
    "keyof" = TokenTypes.KeyOfKeyword,
    "let" = TokenTypes.LetKeyword,
    "module" = TokenTypes.ModuleKeyword,
    "namespace" = TokenTypes.NamespaceKeyword,
    "never" = TokenTypes.NeverKeyword,
    "new" = TokenTypes.NewKeyword,
    "null" = TokenTypes.NullKeyword,
    "number" = TokenTypes.NumberKeyword,
    "object" = TokenTypes.ObjectKeyword,
    "package" = TokenTypes.PackageKeyword,
    "private" = TokenTypes.PrivateKeyword,
    "protected" = TokenTypes.ProtectedKeyword,
    "public" = TokenTypes.PublicKeyword,
    "readonly" = TokenTypes.ReadonlyKeyword,
    "require" = TokenTypes.RequireKeyword,
    "global" = TokenTypes.GlobalKeyword,
    "return" = TokenTypes.ReturnKeyword,
    "set" = TokenTypes.SetKeyword,
    "static" = TokenTypes.StaticKeyword,
    "string" = TokenTypes.StringKeyword,
    "super" = TokenTypes.SuperKeyword,
    "switch" = TokenTypes.SwitchKeyword,
    "symbol" = TokenTypes.SymbolKeyword,
    "this" = TokenTypes.ThisKeyword,
    "throw" = TokenTypes.ThrowKeyword,
    "true" = TokenTypes.TrueKeyword,
    "try" = TokenTypes.TryKeyword,
    "type" = TokenTypes.TypeKeyword,
    "typeof" = TokenTypes.TypeOfKeyword,
    "undefined" = TokenTypes.UndefinedKeyword,
    "unique" = TokenTypes.UniqueKeyword,
    "unknown" = TokenTypes.UnknownKeyword,
    "var" = TokenTypes.VarKeyword,
    "void" = TokenTypes.VoidKeyword,
    "while" = TokenTypes.WhileKeyword,
    "with" = TokenTypes.WithKeyword,
    "yield" = TokenTypes.YieldKeyword,
    "async" = TokenTypes.AsyncKeyword,
    "await" = TokenTypes.AwaitKeyword,
    "of" = TokenTypes.OfKeyword,
    "{" = TokenTypes.OpenBraceToken,
    "}" = TokenTypes.CloseBraceToken,
    "(" = TokenTypes.OpenParenToken,
    ")" = TokenTypes.CloseParenToken,
    "[" = TokenTypes.OpenBracketToken,
    "]" = TokenTypes.CloseBracketToken,
    "." = TokenTypes.DotToken,
    "..." = TokenTypes.DotDotDotToken,
    ":" = TokenTypes.ColonToken,
    ";" = TokenTypes.SemicolonToken,
    "," = TokenTypes.CommaToken,
    "<" = TokenTypes.LessThanToken,
    ">" = TokenTypes.GreaterThanToken,
    "<=" = TokenTypes.LessThanEqualsToken,
    ">=" = TokenTypes.GreaterThanEqualsToken,
    "==" = TokenTypes.EqualsEqualsToken,
    "!=" = TokenTypes.ExclamationEqualsToken,
    "===" = TokenTypes.EqualsEqualsEqualsToken,
    "!==" = TokenTypes.ExclamationEqualsEqualsToken,
    "=>" = TokenTypes.EqualsGreaterThanToken,
    "+" = TokenTypes.PlusToken,
    "-" = TokenTypes.MinusToken,
    "**" = TokenTypes.AsteriskAsteriskToken,
    "*" = TokenTypes.AsteriskToken,
    "/" = TokenTypes.SlashToken,
    "%" = TokenTypes.PercentToken,
    "++" = TokenTypes.PlusPlusToken,
    "--" = TokenTypes.MinusMinusToken,
    "<<" = TokenTypes.LessThanLessThanToken,
    "</" = TokenTypes.LessThanSlashToken,
    ">>" = TokenTypes.GreaterThanGreaterThanToken,
    ">>>" = TokenTypes.GreaterThanGreaterThanGreaterThanToken,
    "&" = TokenTypes.AmpersandToken,
    "|" = TokenTypes.BarToken,
    "^" = TokenTypes.CaretToken,
    "!" = TokenTypes.ExclamationToken,
    "~" = TokenTypes.TildeToken,
    "&&" = TokenTypes.AmpersandAmpersandToken,
    "||" = TokenTypes.BarBarToken,
    "?" = TokenTypes.QuestionToken,
    " =" = TokenTypes.ColonToken,
    "=" = TokenTypes.EqualsToken,
    "+=" = TokenTypes.PlusEqualsToken,
    "-=" = TokenTypes.MinusEqualsToken,
    "*=" = TokenTypes.AsteriskEqualsToken,
    "**=" = TokenTypes.AsteriskAsteriskEqualsToken,
    "/=" = TokenTypes.SlashEqualsToken,
    "%=" = TokenTypes.PercentEqualsToken,
    "<<=" = TokenTypes.LessThanLessThanEqualsToken,
    ">>=" = TokenTypes.GreaterThanGreaterThanEqualsToken,
    ">>>=" = TokenTypes.GreaterThanGreaterThanGreaterThanEqualsToken,
    "&=" = TokenTypes.AmpersandEqualsToken,
    "|=" = TokenTypes.BarEqualsToken,
    "^=" = TokenTypes.CaretEqualsToken,
    "@" = TokenTypes.AtToken,
}