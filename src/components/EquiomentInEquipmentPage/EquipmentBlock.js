import React from 'react'
import classes from './EquipmentBlock.module.scss'
// import H1 from '../H1/H1' 
// import Lead from '../Lead/Lead'
// import laboratory_worker from 'http://www.cf13541.tmweb.ru/storage/regular_img/laboratory_workers/laboratory_worker_01.jpg'


const EquipmentBlock = (props)=> {

    // const equipmentBase = props.equipmentBase
    const imgresource = props.imgresource
    const laboratory_workers = [
        {
            worker_number:1,
            worker_src:'laboratory_worker_01.jpg',
            worker_capture:'',
            worker_alt:'laboratory worker 1',
        },
        {
            worker_number:2,
            worker_src:'laboratory_worker_02.jpg',
            worker_capture:'',
            worker_alt:'laboratory worker 2',
        },
       
    ];

    return(
<div className = {classes.EquipmentBlock}>
    {laboratory_workers.map((item, index) => {
        return(
            <div
            className = {classes.EquipmentItem}
            key={index}
            >
                <div className = {classes.EquipmentImgHolder}>
                        <img src={imgresource+'regular_img/laboratory_workers/'+item.worker_src} alt={item.worker_alt}/>
                </div>
                {/* <img src={laboratory_worker} alt="laboratory_worker"/> */}

                {/* <H1 titleType='Equipment'>{item.title}</H1>
                <Lead leadType = 'Equipment'>{item.lead}</Lead> */}
            </div>
        )
    })}
</div>
        
    )
}
// 'http://www.cf13541.tmweb.ru/storage/regular_img/laboratory_workers/laboratory_worker_01.jpg'
export default EquipmentBlock
