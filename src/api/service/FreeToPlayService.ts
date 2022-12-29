import { AxiosResponse } from "axios";
import { api } from "../api";


function getGame(id: number) : Promise<AxiosResponse> {
    return api.get('https://www.freetogame.com/api/game?id=' + id);
}

const ftpService = {
    getGame,
    // get,
    // getReceitaTOTAL,
    // getDespesaTOTAL,
    // getMovimentacaoPorUsuario,
    // create,
    // update,
    // remove
}
export default ftpService