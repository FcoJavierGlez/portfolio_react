import { cn } from "cn";
import { AngularIcon, AngularMaterialIcon, BootstrapIcon, ReactIcon, TailwindIcon, TypeScriptIcon } from "./brand-icons";


interface Props {
    techName: string;
}

const getTechIcon = (tech: string) => {
    const globalClassName = 'h-[1rem] w-[1rem]';
    const techName = tech.toLocaleLowerCase();
    
    switch (true) {
        case /^angular \d+$/.test(techName): 
            return (
                {
                    bgColor: 'angular',
                    icon: (<AngularIcon className={globalClassName}/>)
                }
            );
        case /^angular material$/.test(techName): 
            return (
                {
                    bgColor: 'angular_material',
                    icon: (<AngularMaterialIcon className={globalClassName}/>)
                }
            );
        case /^type\s?script/.test(techName): 
            return (
                {
                    bgColor: 'typescript',
                    icon: (<TypeScriptIcon className={globalClassName}/>)
                }
            );
        case /^bootstrap(\s\d+)?/.test(techName): 
            return (
                {
                    bgColor: 'bootstrap',
                    icon: (<BootstrapIcon className={globalClassName}/>)
                }
            );
        case /^tailwind/.test(techName): 
            return (
                {
                    bgColor: 'tailwind',
                    icon: (<TailwindIcon className={globalClassName}/>)
                }
            );
        case /^react(\s\d+)?$/.test(techName): 
            return (
                {
                    bgColor: 'react',
                    icon: (<ReactIcon className={globalClassName}/>)
                }
            );
    
        default:
            return (
                {
                    bgColor: 'bg-accent',
                    icon: (<></>)
                }
            )
    }
}

export const TechLabel = ( { techName }: Props ) => {
  return (
    <li
        key={techName}
        className={
            `flex flex-wrap gap-2 rounded-md px-2 py-0.5 font-mono text-xs font-medium text-white ${getTechIcon(techName)?.bgColor}`
        }
        >
        { getTechIcon(techName)?.icon }
        {techName}
    </li>
  )
}
