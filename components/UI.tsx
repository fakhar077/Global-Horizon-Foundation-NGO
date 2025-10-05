
import React from 'react';
import { NavLink } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    ghost: 'bg-transparent text-primary hover:bg-primary/10 shadow-none focus:ring-primary',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

interface CardProps {
    children: React.ReactNode;
    className?: string;
    imageUrl?: string;
    imageAlt?: string;
    title?: string;
    linkTo?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', imageUrl, imageAlt, title, linkTo }) => {
    const content = (
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl ${className}`}>
            {imageUrl && <img src={imageUrl} alt={imageAlt || title} className="w-full h-48 object-cover" />}
            <div className="p-6">
                {title && <h3 className="text-xl font-bold text-neutral-dark mb-2">{title}</h3>}
                {children}
            </div>
        </div>
    );

    if (linkTo) {
        return <NavLink to={linkTo}>{content}</NavLink>
    }
    return content;
};
