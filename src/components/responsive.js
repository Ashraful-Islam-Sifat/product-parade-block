import { Button } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { DesktopIcon, TabletIcon, MobileIcon } from '../controls/svgIcon';
import { useDeviceType } from '../controls/controls';

const Responsive = () => {
	const Device = ( e ) => {
		const deviceType = e.target.closest( 'button' ).value;
		dispatch( 'core/editor' ).setDeviceType( deviceType );
	};

	const deviceType = useDeviceType();

	const DeviceIcon = () => {
		if ( 'Desktop' === deviceType ) {
			return <DesktopIcon />;
		}
		if ( 'Tablet' === deviceType ) {
			return <TabletIcon />;
		}
		if ( 'Mobile' === deviceType ) {
			return <MobileIcon />;
		}
		return null;
	};

	return (
		<>
			<div className="ppb-responsive">
				<div className="ppb-units">
					<span>
						<DeviceIcon />
					</span>
					<div className="ppb-units-btn">
						<Button
							className={
								deviceType === 'Desktop' ? 'active' : ''
							}
							value={ 'Desktop' }
							onClick={ Device }
						>
							<DesktopIcon />
						</Button>
						<Button
							className={
								deviceType === 'Tablet' ? 'active' : ''
							}
							value={ 'Tablet' }
							onClick={ Device }
						>
							<TabletIcon />
						</Button>
						<Button
							className={
								deviceType === 'Mobile' ? 'active' : ''
							}
							value={ 'Mobile' }
							onClick={ Device }
						>
							<MobileIcon />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Responsive;
