import React, {useContext} from 'react'
import { PhongContext } from '../context'

export const RoomFilter = ({ rooms }) => {
    const context  = useContext(PhongContext);
    console.log('context', context);
    
    const { handleChange, type, price, name , minPrice, maxPrice} = context;
    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))];
      };
      let types = getUnique(rooms, "type");//day la goi ham nhung ko co this.getUnique vi day la component function
      // add all
      types = ["all", ...types];
      // map to jsx
      types = types.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>//option co proprety la value
      ));
    return (
        <div>
            <select name="type"
                value={type}
                onChange={handleChange}
            >
                {types}
            </select>
            <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                id="price"
                value={price}
                onChange={handleChange}
                className="form-control"
            />
        </div>
    )
}
