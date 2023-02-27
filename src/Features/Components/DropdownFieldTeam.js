import React from "react";
import Select from "react-dropdown-select";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTeamName, setTeamList } from "../../redux/actions/actions";
function DropdownFieldTeam(props) {
  const val = useSelector((state) => state);
  const dispatch = useDispatch();
  const onChange = (event) => {
    dispatch(setTeamName(event[0].value));
  };
  const opendrop = () => {
    if (val.all.countryname) {
      let URL =
        "https://soccer.sportmonks.com/api/v2.0/countries/" +
        val.all.countryname +
        "/teams";
      axios
        .get(URL, {
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
          dispatch(setTeamList(country));
        });
    }
  };
  return (
    <>
      <label className="label-85">TEAM</label>
      <Select
        searchable="true"
        placeholder="Select Team"
        closeOnScroll="true"
        onChange={onChange}
        onDropdownOpen={opendrop}
        closeOnSelect="true"
        className="label-85 countrycss"
        options={val.all.teamlist}
      />
    </>
  );
}

export default DropdownFieldTeam;
