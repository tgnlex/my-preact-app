import {Node} from './_exporter.js'
 const style = {display: "flex", flexDirection: "row"};

const Row = (props) => {
    return (
      <Node id={props.id} class={props.class} style={style && props.style}>
        {props.children}
      </Node>
    )
}

export {Row};