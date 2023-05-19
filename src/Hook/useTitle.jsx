import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Super Toys`;

    }, [title])
}
export default useTitle;