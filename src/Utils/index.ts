export class Utils {
  public static uuid(): string {
    /*jshint bitwise:false */
    let i, random;
    let uuid = "";

    for (i = 0; i < 32; i++) {
      random = (Math.random() * 16) | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += "-";
      }
      uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
        16
      );
    }

    return uuid;
  }

  public static pluralize(count: number, word: string) {
    return count === 1 ? word : word + "s";
  }

  public static extractTags(input: string) {
    const text = input.replace(/@\w+/g, '').trim();
    const tags = input.match(/@\w+/g) || [];
    
    return {
      text: text,
      tags: tags.map(tag => tag.replace("@", "")),
    };
  }
  
  public static combineTagsWithText(text: string, tags: string[]) {
    return text + " " + tags.map(tag => "@" + tag).join(" ");
  }
}
