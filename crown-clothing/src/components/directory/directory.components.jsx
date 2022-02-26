import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

import { connect } from "react-redux";
import directoryReducer from "../../redux/directory/directory.reducer";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
