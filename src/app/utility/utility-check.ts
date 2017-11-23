import * as franc from "franc";
import * as _ from "lodash";

export const tests: string[] = [
  "//",
  "@action",
  "-message id=",
  "voice=",
  "\\",
  "@",
  "name=",
  "id=",
  "effect=",
  "sound=",
  "blend=",
  ":embed_page",
  "time=",
  "-se_stop",
  "-message_hide"
];

export function checkSystem(sentence: string): boolean {
    let result = false;
    _.forEach(tests, test => {
      if (_.includes(sentence, test)) {
        result = true;
      }
    });
    return result;
  }

export function checkCanDelete(sentence: string): boolean {
  if (checkSystem(sentence)) {
    return false;
  }
  let results = franc.all(sentence, { whitelist: ["eng", "vie", "jpn"] });
  let first_result = _.head(results);
  console.log(results);
  if (first_result[0] === 'und') {
    return false;
  }

  if (first_result[0] === 'eng' && first_result[1] === 1) {
    let second_result = _.last(results);
    if (second_result !== undefined ) {
      if (second_result[0] === "vie" && second_result[1] > 0.9) {
        return false;
      }
    }

    return true;
  }


}

