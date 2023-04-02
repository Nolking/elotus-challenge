import { dev_keys } from "./dev";
import { prod_keys } from "./prod";

type Keys = {
    API_KEY: string
}
let keys : Keys;
if (process.env.NODE_ENV === 'production') {
    keys = {...prod_keys};
} else {
    keys = {...dev_keys};
}
export default keys;

