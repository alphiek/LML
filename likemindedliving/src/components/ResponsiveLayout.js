import { useWindowDimensions } from '../context/windowDimensionsProvider'

export const ResponsiveLayout = ({ breakpoint, renderTablet, renderDesktop }) => {
    const { width } = useWindowDimensions()
    return (width > breakpoint ? renderDesktop() : renderTablet())
}