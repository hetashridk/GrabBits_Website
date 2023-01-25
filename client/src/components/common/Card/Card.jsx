import React from 'react';
import classes from './Card.module.css';
import verified from '../../../assets/verified.png';
import { Button } from '../../common/index';

const Card = () => {
	return (
		<>
			<div className={classes.outer_container}>
				<div className={classes.inner_container}>
					<div className={classes.data}>
						<h1 className={classes.name}>Google</h1>
						<img className={classes.verified} src={verified} alt="verified" />
					</div>
					<div className={classes.tags}>
						<span className={classes.tag}>UI/UX</span>
						<span className={classes.tag}>Web Developer</span>
						<span className={classes.tag}>Cloud</span>
					</div>
					<div className={classes.description}>
						Des cription vbdivskhj abvk,kjs hgav fkirsufb;kajgf iuy wrfgelhf
						blfkhsbfliyg bfr ifbalwefhgfjhs Des cription vbdivskhj abvk,kjs hgav
						fkirsufb;kajgf iuy wrfgelhf blfkhsbfliyg bfr ifbalwefhgfjhsDes
						cription vbdivskhj abvk,kjs hgav fkirsufb;kajgf iuy wrfgelhf
						blfkhsbfliyg bfr ifbalwefhgfjhs
					</div>
					<div className={classes.apply}>
						<Button bgColor="#7541C8" label="APPLY NOW" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;