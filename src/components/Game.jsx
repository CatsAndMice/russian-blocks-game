import { defineComponent, reactive } from "vue";
import { startGame } from "../game"
import Box from "./Box";
import "../assets/game.css";

export default defineComponent({
    setup() {
        const map = reactive([])
        startGame(map);
        const getView = () => {
            return map.map((row) => row.map(col => (<Box type={col} />)))
        }

        return () => {
            return (
                <div className="game">
                    {getView()}
                </div>
            );
        }
    }
})