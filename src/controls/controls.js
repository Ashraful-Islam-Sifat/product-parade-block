
export const useDeviceType = () => {
    const deviceType = wp.data.select('core/editor').getDeviceType();
    return deviceType || 'Desktop';
};
