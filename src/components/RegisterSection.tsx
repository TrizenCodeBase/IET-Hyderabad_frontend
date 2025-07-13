import React from 'react';

const RegisterSection = () => {
  return (
    <section id="register" className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg text-center relative z-10 px-4 sm:px-6">
        <div className="animate-on-scroll space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Ready to Join IET Hyderabad Local network?
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on this incredible opportunity to showcase your innovation and compete with the best minds!
          </p>
          
          <div>
            <button className="px-8 py-2.5 bg-background text-foreground rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transform hover:scale-[1.02] transition-all duration-500">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
