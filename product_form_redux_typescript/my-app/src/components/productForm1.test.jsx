import React from 'react';
import { shallow } from 'enzyme';
import FunctionForm from './productForm1';
/*product_name: "test_product",
product_price: 20,
selling_price: 30,
warning: 100,form.props().onChange({target: {
      product_id: 10,
      
form.simulate('change',{
      target:{value:10},
    })
    form = component.find('input').at(0)*/
const product_id = 10
const product_idChange = 10

const simulateChangonInput = (wrapper,inputselector,newvalue)=>{
  let input = wrapper.find(inputselector)
  input.simulate('change',{
    target:{value:newvalue}
  })
  return wrapper.find(inputselector)
}

describe("whole test", () => {
  it("expect to run component",()=>{
    expect(shallow(<FunctionForm/>).length).toEqual(1);
  })

  it("expect to run  PRODUCT ID label component",()=>{
    const wrapper = shallow((
      <FunctionForm/>
    ));
    expect(wrapper.contains(<label>Product Id:</label>)).toEqual(true);
    
  })
  it("expect to run  all input component",()=>{
    const wrapper = shallow((
      <FunctionForm/>
    ));
    expect(wrapper.find('input')).toHaveLength(5);
    
  })

  it("expect to run  all label component",()=>{
    const wrapper = shallow((
      <FunctionForm/>
    ));
    expect(wrapper.find('label')).toHaveLength(5);
    
  })

  it("expect to run  all button component",()=>{
    const wrapper = shallow((
      <FunctionForm/>
    ));
    expect(wrapper.find('button')).toHaveLength(2);
    
  })

  
  it('Should capture product_id', function(){
    const component = shallow(<FunctionForm />);
    //let form = component.find('input').at(0);
    const updatedinput = simulateChangonInput(component,'input#product_id',10)
    
    expect(updatedinput.props().value).toEqual(10);
  })

  it('Should capture product_name', function(){
    const component = shallow(<FunctionForm />);
    //let form = component.find('input').at(0);
    const updatedinput = simulateChangonInput(component,'input#product_name',"test_product")
    
    expect(updatedinput.props().value).toEqual("test_product");
  })

  it('Should capture product_price', function(){
    const component = shallow(<FunctionForm />);
    //let form = component.find('input').at(0);
    const updatedinput = simulateChangonInput(component,'input#product_price',20)
    
    expect(updatedinput.props().value).toEqual(20);
  })

  it('Should capture selling_price', function(){
    const component = shallow(<FunctionForm />);
    //let form = component.find('input').at(0);
    const updatedinput = simulateChangonInput(component,'input#selling_price',30)
    
    expect(updatedinput.props().value).toEqual(30);
  })
  it('Should capture warning', function(){
    const component = shallow(<FunctionForm />);
    //let form = component.find('input').at(0);
    const updatedinput = simulateChangonInput(component,'input#warning',60)
    
    expect(updatedinput.props().value).toEqual(60);
  })
  
  });

