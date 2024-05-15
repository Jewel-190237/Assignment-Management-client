

import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `StudyUtilityHub | ${title}`;
    },[])
};

export default UseTitle;
