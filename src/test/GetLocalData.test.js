import GetLocalData from "../component/GetLocalData";

test("ローカルデータの取得テスト", () => {
    expect(GetLocalData().length).toBe(0);
});