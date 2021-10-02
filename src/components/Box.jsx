import { defineComponent, toRefs } from "vue";
import "../assets/box.css";

const color = {
    [-1]: "red",
    [0]: "gray",
    [1]: "red",
}
export default defineComponent({
    props: {
        type: {
            type: Number,
            default: 0
        }
    },

    setup(props) {
        let { type } = toRefs(props)

        return () => {
            return (
                <div className="box" style={{ "backgroundColor": color[type.value] }} ></div>
            )
        }
    }
})