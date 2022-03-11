import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

import { useSelector } from "react-redux";
import directoryReducer from "../../redux/directory/directory.reducer";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySections,
// });

// export default connect(mapStateToProps)(Directory);
export default Directory;
