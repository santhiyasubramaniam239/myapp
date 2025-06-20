import "../../App.css"
export default function JSXExample(){
    const name = "Logesh";
    /*<div><h1>Hello {name}</h1>
    <p>This is a sample text</p>
    </div>*/
    return <><h1 className="bg-color">Hello {name}</h1>
    <p style={{backgroundColor:"yellow", border:"10px solid black"}}>This is a sample text</p>
    </>

}