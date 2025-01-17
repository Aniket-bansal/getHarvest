import React from 'react'
import harvest from '../Styles/Whyharvest.module.css'
import {useNavigate} from 'react-router-dom'
import {Box} from '@chakra-ui/react'
const Whyharvest = () => {
    const nav = useNavigate();
   const routeTo = () =>{
    nav('/signin')

   }
   const browseFeature=()=>{
    nav('/features')
   }
  return (
    <Box className={harvest.harvest_mainContainer}>
     <Box className={harvest.harvest_banner}>
     <Box className={harvest.banner_hero_img}>
        <Box className={harvest.text}>
        <h1>Help your team spend time wisely</h1>
        <h3>Harvest time tracking makes it easy to capture time, gain&nbsp;<br/> insights from past projects, and get paid for your work.</h3>
        <Box className={harvest.btn}>
        <button onClick={routeTo}>Try Harvest Free</button><p>Free 30-day trial. No credit card required.</p>
        </Box>
        </Box>
     </Box>
     </Box>
     <Box className={harvest.middle_section}>
        {/* Empower Section */}
        <Box className={harvest.empower_section}>
         <Box className={harvest.empower_text}>
            <h1>Empower your team with insight</h1>
            <h3>By tracking time and expenses in Harvest, you capture critical project data that allows you to learn from the past, keep current projects on track, and better estimate future projects.</h3>
            <ul className={harvest.feature_checklist}>
            <li>Review past data to improve how you scope and price work</li>
            <li>Understand which projects are profitable — and why</li>
            <li>Know when to take on new business (or grow your team)</li>
          </ul>
          <button onClick={browseFeature}>Browse Features</button>
         </Box>
         <Box className={harvest.empower_image}>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-reflect.svg" alt="empower-img" />
            <h3>"As a growing business, with Harvest we get a lot of insights and intelligence that we couldn’t get before."</h3>
            <h4>Ben Graham, Turnstyle</h4>
         </Box>
        </Box>
        {/* Time Tracker */}
        <Box className={harvest.Timetrack_section}>
        <Box className={harvest.Timetrack_img}>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-keep.svg" alt="Timetrack-img" />
            <h3>"We needed something super simple because we don’t want to have to teach people how to use it as part of onboarding."</h3>
            <h4>Nick Frandsen, Dovetail</h4>
         </Box>
         <Box className={harvest.Timetrack_text}>
            <h1>Time tracking that works the way your team works</h1>
            <h3>Time tracking software is only useful if it’s actually used. That’s why we designed Harvest to be easy to adopt, integrated with your favorite apps, and flexible enough for all types of teams.</h3>
            <ul className={harvest.feature_checklist}>
            <li>Integrated with the tools your team already knows and loves</li>
            <li>Track time wherever you work - desktop, browser, and mobile</li>
            <li>Intuitive and easy to learn</li>
          </ul>
          <button onClick={browseFeature}>Browse Features</button>
         </Box>
        
        </Box>
        {/* Keep Projects On Track */}
        <Box className={harvest.KeepTrack_section}>
         <Box className={harvest.KeepTrack_text}>
            <h1>Keep your projects on track </h1>
            <h3>Harvest provides visibility into the key aspects of your projects—budget, team capacity, and costs—enabling you to keep everything on time and on budget.</h3>
            <ul className={harvest.feature_checklist}>
            <li>Review past data to improve how you scope and price work</li>
            <li>Understand which projects are profitable — and why</li>
            <li>Know when to take on new business (or grow your team)</li>
          </ul>
          <button onClick={browseFeature}>Browse Features</button>
         </Box>
         <Box className={harvest.KeepTrack_image}>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-track.svg" alt="KeepTrack-img" />
            <h3>"We can see if a project is in danger of going off track and course-correct way before it actually becomes a problem."</h3>
            <h4>Michael Kucera, Zehner</h4>
         </Box>
        </Box>
        {/* Trusted section */}
        <Box className={harvest.Timetrack_section}>
        <Box className={harvest.Timetrack_img}>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-invest.svg" alt="Timetrack-img" />
            <h3>"Harvest gives us feedback on how we’re doing so we can be competitive, make a profit, and keep ourselves afloat."</h3>
            <h4>John Wall, Public</h4>
         </Box>
         <Box className={harvest.Timetrack_text}>
            <h1>Trusted by thousands of teams worldwide</h1>
            <h3>We’ve been serving teams of all sizes, across all types of industries for over 15 years. Today, with more than 70,000 customers, you can be sure that Harvest will work for your team’s unique needs.</h3>
            <ul className={harvest.feature_checklist}>
            <li>Flexible timekeeping and invoicing, whether you bill by time or by project</li>
            <li>Scalable one-product-fits-all approach, that can grow with your team</li>
            <li>Used by companies of all types, from creative agencies to management consulting</li>
          </ul>
          <button onClick={browseFeature}>Browse Features</button>
         </Box>
        </Box>
        {/* partner banner */}
        <Box className={harvest.Partner_banner}>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize" alt="partner" />
        </Box>
     </Box>
     <Box className={harvest.bottom_section}>
         <Box className={harvest.bottom_text}>
            <h1>Start tracking time today</h1>
            <h3>Join 70,000+ companies spending their time wisely with Harvest.</h3>
            
            <Box className={harvest.btn}>
        <button onClick={routeTo}>Try Harvest Free</button><p>Free 30-day trial. No credit card required.</p>
        </Box>
         </Box>
         <Box className={harvest.bottom_img}>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" alt="bottom-img" />
         </Box>
     </Box>
     
    </Box>
  )
}

export default Whyharvest;


