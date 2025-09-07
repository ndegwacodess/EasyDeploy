import React from 'react'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiParrotsecurity } from "react-icons/si";
import { SiCampaignmonitor } from "react-icons/si";
import { SiMarketo } from "react-icons/si";
import { TbReport } from "react-icons/tb";
import { MdContactSupport } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { GiPlagueDoctorProfile } from "react-icons/gi";


export default function MainNavbar() {
  const Navbar = [
    {index: 1, name: "Dashboard", icon: <MdOutlineDashboardCustomize/>,path: "", hasDropDown: false},
    {index: 2, name: "Deployments", icon: <AiOutlineDeploymentUnit/>, path: "", hasDropDown: false },
    {index: 3, name: "Security", icon: <SiParrotsecurity/>, path: "", hasDropDown: false},
    {index: 4, name: "Monitoring", icon: <SiCampaignmonitor/>, path: "", hasDropDown: false},
    {index: 5, name: "Marketplace", icon: <SiMarketo/>, path: "", hasDropDown: false},
    {index: 6, name: "Reports", icon: <TbReport/>, path: "", hasDropDown: false},
    {index: 7, name: "Supports", icon: <MdContactSupport/>, path: "", hasDropDown: false},
    {index: 8, name: "Settings", icon: <VscSettingsGear/>, path: "", hasDropDown: false},
    {index: 9, name: "Profile", icon: <GiPlagueDoctorProfile/>, path: "", hasDropDown: false},
  ]
  return (
    <div>MainNavbar</div>
  )
}
