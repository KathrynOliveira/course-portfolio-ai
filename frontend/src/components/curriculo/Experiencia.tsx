export default function Experiencia(){
    return(
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-around gap-6 p-6 bg-black border border-zinc-800 rounded-2xl">
           <Item principal="+150" label="países atendidos"></Item>
           <Item principal="+4" label="anos de experiência"></Item>
           <Item principal="420k" label="alunos matriculados"></Item>
        </div>
    )
}

function Item(props: {principal: string, label: string }){
    return(
        <div className="flex flex-col items-center">
            <span className="text-red-500 font-bold text-3xl leading-6">{props.principal}</span>
             <span className="text-zinc-500 text-sm text-center">{props.label}</span>
        </div>
    )
}