import React from "react";
import FormBuilder, {
  Registry,
  Toolbar,
  ElementStore,
} from "react-form-builder2";
import DemoBar from "../components/demobar";

// Form Data
const url = "/api/formdata";
const saveUrl = "/api/formdata";
const postUrl = "/api/form";

const TestComponent = () => <h2>hello</h2>;

const MyInput = React.forwardRef((props, ref) => {
  const { name, defaultValue, disabled } = props;
  return (
    <input
      ref={ref}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
});

Registry.register("MyInput", MyInput);
Registry.register("TestComponent", TestComponent);
const items = [
  {
    group_name: "Custom Element",
    key: "TestComponent",
    element: "CustomElement",
    // component: TestComponent,
    // type: "custom",
    field_name: "test_component",
    name: "Something You Want",
    icon: "fa fa-cog",
    static: true,
    props: { test: "test_comp" },
    label: "Label Test",
  },
  {
    group_name: "Custom Element",
    key: "MyInput",
    element: "CustomElement",
    component: MyInput,
    type: "custom",
    forwardRef: true,
    bare: true,
    field_name: "my_input_",
    name: "My Input",
    icon: "fa fa-cog",
    props: { test: "test_input" },
    label: "Label Input",
  },
];

class Index extends React.Component {
  // awesome() {
  //   ElementStore.dispatch(
  //     "create",
  //     Toolbar.create({
  //       key: "Header",
  //       name: "test header",
  //       icon: "fas fa-heading",
  //       static: true,
  //       content: "test",
  //     })
  //   );
  // }

  render() {
    return (
      <div>
        <div onClick={() => this.awesome()}>click this for magic</div>
        <DemoBar postUrl={postUrl} />
        <FormBuilder.ReactFormBuilder
          url={url}
          saveUrl={saveUrl}
          toolbarItems={items}
          customToolbarItems={items}
        />
      </div>
    );
  }
}

export default Index;
