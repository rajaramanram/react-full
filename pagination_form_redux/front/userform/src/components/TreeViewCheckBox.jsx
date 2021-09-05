import React, { Component } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdChevronRight,
    MdKeyboardArrowDown,
    MdAddBox,
    MdIndeterminateCheckBox,
    MdFolder,
    MdFolderOpen,
    MdInsertDriveFile
} from "react-icons/md";

const nodes = [
  {
    value: "Countries",
    label: "Countries",
    isChecked:false,
    children: [
      {
        value: "India",
        label:"India",
        isChecked:true,
        children: [
          {
            value: "TamilNadu",
            label: "TamilNadu",
            isChecked:false
        },
        {
            value: "Kerala",
            label: "Kerala",
            isChecked:false
        },{
            value: "Karnataka",
            label: "Karnataka",
            isChecked:false
        },{
            value: "Andra",
            label: "Andra",
            isChecked:false
        },{
            value: "Delhi",
            label: "Delhi",
            isChecked:false
        }
            ]
        },
    {
        value: "Pakistan",
        label:"Pakistan",
        isChecked:false,
        children: [
          {
            value: "child-1",
            label: "child-1",
            isChecked:false
        },
        {
            value: "Child-2",
            label: "Child-2",
            isChecked:false
        },{
            value: "Child-3a",
            label: "Child-3a",
            isChecked:false
        },{
            value: "Child-4",
            label: "Child-4",
            isChecked:false
        },{
            value: "child-5",
            label: "child-5",
            isChecked:false,
        }
            ]
        },
    {
        value: "Bangladesh",
        label:"Bangladesh",
        isChecked:false,
        children: [
          {
            value: "child-6",
            label: "child-6",
            isChecked:false
        },
        {
            value: "Child-7",
            label: "Child-7",
            isChecked:false
        },{
            value: "Child-8a",
            label: "Child-8a",
            isChecked:false
        },{
            value: "Child-9",
            label: "Child-9",
            isChecked:false
        },{
            value: "child-10",
            label: "child-10",
            isChecked:false,
        }
            ]
        }]
    }]
          

class WidgetTree extends Component {
  state = {
    checked: [],
    expanded: []
  };

  render() {
    console.log(this.state.checked)
    console.log(this.state.expanded)
    const icons = {
      check: <MdCheckBox className="rct-icon rct-icon-check" />,
      uncheck: <MdCheckBoxOutlineBlank className="rct-icon rct-icon-uncheck" />,
      halfCheck: (
        <MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />
      ),
      expandClose: (
        <MdChevronRight className="rct-icon rct-icon-expand-close" />
      ),
      expandOpen: (
        <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />
      ),
      expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
      collapseAll: (
        <MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />
      ),
      
    };
    console.log(this);
    return (
      <CheckboxTree
        nodes={nodes}
        checked={this.state.checked}
        expanded={this.state.expanded}
        onCheck={checked => this.setState({ checked })}
        onExpand={expanded => this.setState({ expanded })}
        icons={icons}
        
      />
      
    );
  }
}
export default WidgetTree;