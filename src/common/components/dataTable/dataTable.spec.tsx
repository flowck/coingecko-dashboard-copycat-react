import Enzyme, { shallow } from "enzyme";
import { DataTable } from "./dataTable";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("DataTable", () => {
  const columns = [{ name: "volume", label: "Volume" }];
  const rows = [{ volumn: "$1,616,422,384" }];

  it("Expects rows to be rendered", () => {
    const wrapper = shallow(<DataTable columns={columns} rows={rows} />);
    expect(wrapper.find("tbody tr").length).toBeTruthy();
  });
});
