import enzyme, { shallow } from "enzyme";
import { Categories } from "./categories";
import Adapter from "enzyme-adapter-react-16";
import categories from "./categories.mock.json";

enzyme.configure({ adapter: new Adapter() });

describe("Categories", () => {
  it("On button click it should open the categories' list", () => {
    const wrapper = shallow(<Categories items={categories}></Categories>);
    const button = wrapper.find("#toggleCategories");
    button.simulate("click");
    expect(wrapper.find("#categoriesList").exists()).toBeTruthy();
  });
});
