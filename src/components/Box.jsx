import { defineComponent, toRefs, computed } from "vue";
import "../assets/box.css";

const colorMap = {
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
        let color = computed(() => colorMap[type.value])
        return () => {
            return (
                <div className="box" style={{ "backgroundColor": color.value }} ></div>
            )
        }
    }
})