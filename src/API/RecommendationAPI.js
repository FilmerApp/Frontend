export const GetRecommendations = async (id) => {
    let res = await
        fetch("https://localhost:7022/api/Recommendation/GetRecommendations?userId=" + id + "&amount=10", {
            method: "GET"
        });
    return ((res.status === 200) ? res.json() : res);
}