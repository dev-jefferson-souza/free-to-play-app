import { AxiosResponse } from "axios";
import { api } from "../api";


function getGame(id: number) : Promise<AxiosResponse> {
    return api.get('https://www.freetogame.com/api/game?id=' + id);
}

function getCategory(category: string) : Promise<AxiosResponse> {
    return api.get('https://www.freetogame.com/api/games?platform=pc&category=' + category);
}

function getFiltered(uri: string) : Promise<AxiosResponse> {
    return api.get('https://www.freetogame.com/api' + uri);
}

const ftpService = {
    getGame,
    getCategory,
    getFiltered
}
export default ftpService