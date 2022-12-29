import { AxiosResponse } from "axios";
import { api } from "../api";


function getGame(id: number) : Promise<AxiosResponse> {
    return api.get('https://www.freetogame.com/api/game?id=' + id);
}

function getCategory(category: string) : Promise<AxiosResponse> {
    return api.get('https://www.freetogame.com/api/games?category=' + category);
}

const ftpService = {
    getGame,
    getCategory
}
export default ftpService