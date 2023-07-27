// TODO: Create a more robust email type
type AlphaNumericString = string
type EmailAlias = string

type EmailDomain = `${AlphaNumericString}.${AlphaNumericString}`

export type Email = `${EmailAlias}@${EmailDomain}`

/* Fun Stuff: It would be great if TS were intelligent enough to intepret circular type definitions like BNF grammars
For example, the following would be great:
type DottedButDKHowMany = `${string}.${DottedButDKHowMany}` | `${string}`
*/ 