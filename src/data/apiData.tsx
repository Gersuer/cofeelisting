import Axios from "axios";
import { useEffect, useState } from "react";

export default function Data() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
                if (response.data) {
                    setData(response.data)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return data
}


