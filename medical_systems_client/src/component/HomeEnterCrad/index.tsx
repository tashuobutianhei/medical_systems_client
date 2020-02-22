import React from 'react';
import {Button} from 'antd';


import 'antd/dist/antd.css';
import './index.scss';

type Props = {
  color: string
  imgUrl: string
  enterText: string
  textColor: string
}

function HomeEnterCrad(props: Props) {
	let imgUrl = `/img/${props.imgUrl}.png`;
	return (
		<div className="homeentercrad" style={{backgroundColor: props.color}}>
			<div className="homeentercrad-body">
				<img src={imgUrl}></img>
				<span className="homeentercrad-body-text" 
					style={{color: props.textColor}}>{props.enterText}</span>
				<Button className="homeentercrad-body-button" 
					style={{color: props.textColor, backgroundColor: props.color}}>点击进入</Button>
			</div>
		</div>
	);
}

export default HomeEnterCrad;