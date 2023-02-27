import React from "react";
import Select from "react-dropdown-select";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCountryList, setCountryName } from "../../redux/actions/actions";
import { width } from "@mui/system";

function DropdownFieldCountry(props) {
  const val = useSelector((state) => state);
  const dispatch = useDispatch();
  const onChange = (event) => {
    dispatch(setCountryName(event[0].value));
  };

  const opendrop = () => {
    if (val.all.countrylist.length < 1) {
      axios
        .get("https://soccer.sportmonks.com/api/v2.0/countries", {
          params: {
            api_token:
              "VcwrCLru5slooWKbvHmqDEAnYAGqDbnxsIPZs4tFWRaYv3VSPhe7uXmzn2Nj",
          },
        })
        .then((res) => {
          let countr = res.data.data;
          let country = [];
          countr.map((res) => {
            country.push({ value: res.id, label: res.name });
          });
          dispatch(setCountryList(country));
        });
    }
  };
  return (
    <>
      <label className="label-85">country</label>
      <Select
        searchable="true"
        closeOnScroll="true"
        onChange={onChange}
        onDropdownOpen={opendrop}
        closeOnSelect="true"
        className="label-85 countrycss"
        options={val.all.countrylist}
      />
    </>
  );
}

export default DropdownFieldCountry;
