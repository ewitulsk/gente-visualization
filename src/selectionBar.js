import axios from "axios"
import { useEffect, useState } from "react"
import { placeholderPeople } from "./placeholderPeople"
import { API_BASE } from "./settings"
export function SelectionBar(props){

    const [people, setPeople] = useState(placeholderPeople)
    const [settings, setSettings] = useState({"all": false, "children": 2})

    function onClickHandler(e, bInfo){
        e.preventDefault()
        props.setBaptismalInfo({
            baptismal_mission: bInfo.baptismal_mission,
            baptismal_number: bInfo.baptismal_number
        })
        
    }

    function onCheckBoxHandler(e){
        console.log(e.target.value)
        if(settings.all){
            setSettings({"all": false, "children": settings.children})
        }
        else{
            setSettings({"all": true, "children": settings.children})
        }
    }

    function onChildrenHandler(e){
        setSettings({"all": settings.all, "children": e.target.value})
    }

    useEffect(() => {
        async function getPeople(){
            let route = "/getMulatos"
            if(settings.all){
                route = "/getMany"
            }
            else{
                route = "/getMulatos"
            }
            const URL = API_BASE + route + "?num_children="+settings.children
            console.log("Calling: " + URL)
            const result = await axios.get(URL)
            console.log(result.data["result"])
            setPeople(result.data["result"])
        }
        getPeople()
    }, [setPeople, settings, setSettings])

    return(
        <div>
            <div class="py-2">
                <div>
                    <label>All People: </label>
                    <input onChange={onCheckBoxHandler} type="checkbox"></input>
                </div>
                <div>
                    <label>Min Children: </label>
                    <input onChange={onChildrenHandler} class="border-2 border-stone-300" defaultValue={2}></input>
                </div>
            </div>
            
            <div class="flex item-stretch overflow-y-auto">
                {people ? people.map((bInfo) => {
                return (
                        <div class="px-1">
                            <button class="px-8 py-4 bg-stone-300 rounded-xl truncate ..." onClick={(e) => onClickHandler(e, bInfo)} key={bInfo.baptismal_mission.toString()+bInfo.baptismal_number.toString()+bInfo.name_text.toString()}> {bInfo.name_text} </button>
                        </div>
                )

                }) : (<div></div>)}
            </div>
        </div>
    )
}