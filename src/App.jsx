import { defineComponent } from "vue";
import Game from "./components/Game";
import "./assets/reset.css"

export default defineComponent({
    setup() {
        return () => {
            return (
                <div>
                    <Game />
                </div>
            )
        }
    }
})