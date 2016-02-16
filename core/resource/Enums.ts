// Add new values to this enum as support for new types is created
export function test() {
    console.log('test')
}

/**
 * DD stands for Data Doodler. Because we want well-controlled handling of certain types, we need
 * to have our own data types. DynamoDb numeric fields cannot have empty string values, and entering
 * a 0 for a missing value would be inaccurate. If we know that a certain field is a DDType number,
 * we can use a special value for missing (ie, -9, or "None", etc...).
 */
export enum DDType
{
    number,
    string
}

/**
 * Variables may be treated differently depending on where they came from. For example, variables
 * from fdic-sdi-data should be immutable, but user-created variables can change depending on needs
 * of the users
 */
export enum SourceType{
    fdic_sdi_data,
    user_created
}


