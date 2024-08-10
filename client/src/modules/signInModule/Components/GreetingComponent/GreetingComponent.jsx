import icons from '../../../../assets/icons/Icons.jsx';
import styles from '../../styles/greetingStyles.module.scss';

export function GreetingComponent() {
  return (
    <div className = { styles.secondContainer }> {/* <!-- Second container --> */} 
      <div className = { styles.greetingContent }>
        <p className = { styles.txtTitle }>Welcome</p>
        <p className = { styles.txtSubtitle }>Exerience and explore the Technology Demonstration Farm</p>
        <img src = { icons.mapIcon } alt = "Icon" /> {/* <!-- Insert graphic element --> */}
      </div>          
    </div>
  )
}