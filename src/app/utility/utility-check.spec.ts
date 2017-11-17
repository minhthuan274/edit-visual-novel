import { checkSystem, checkCanDelete } from "./utility-check";

describe('Test with script system', () => {
  it('should return true', () => {
    let text = '@立ち絵 id="始皇帝", time=300';
    expect(checkSystem(text)).toBeTruthy();
  });
});

fdescribe('Test can delete', () => {
  it('should first test case', () => {
    let text = "Don't worry&.";
    expect(checkCanDelete(text)).toBeTruthy();
  });

  it("should 2nd test case", () => {
    let text = "<FONT interval=60>＊Cough＊&.&.&. Làm phiền&.&.&. mọi người rồi&.&.&. ＊cough cough＊&.&.&.</FONT>";
    expect(checkCanDelete(text)).toBeFalsy();
  });

  it("should 3rd test case", () => {
    let text = '-message id="始皇帝", voice="始皇帝##C10_始皇帝_01_お薬を求めて_本#0008.ogg"';
    expect(checkCanDelete(text)).toBeFalsy();
  });

  fit("should 4nd test case", () => {
    let text = '-se sound="破壊１.ogg", ch=12';
    expect(checkCanDelete(text)).toBeFalsy();
  });

});
