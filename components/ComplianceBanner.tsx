export default function ComplianceBanner() {
  return (
    <div className="bg-[#0B0C10] border-b border-[#3B3E47] sticky top-0 z-[60]">
      <div className="container mx-auto px-2 py-0.5 md:py-2">
        <div className="flex flex-wrap items-center justify-center gap-0.5 md:gap-4 text-[8px] md:text-sm">
          <span className="text-[#FFD93D] font-semibold">18+</span>
          <span className="text-[#F5F6F7]">|</span>
          <span className="text-[#F5F6F7]">Play responsibly</span>
          <span className="text-[#F5F6F7]">|</span>
          <a
            href="https://www.stopspillet.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#18FFFF] hover:underline"
          >
            StopSpillet.dk
          </a>
          <span className="text-[#F5F6F7]">|</span>
          <a
            href="https://www.rofus.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#18FFFF] hover:underline"
          >
            ROFUS.dk
          </a>
        </div>
        <div className="mt-0.5 md:mt-1.5 text-center text-[9px] md:text-xs text-[#8B8E97] leading-tight px-1">
          <p className="whitespace-normal break-words">
            <strong>Advertising disclosure:</strong> This website contains affiliate links to DK-licensed operators. We may receive a commission if you click a link and register/deposit. This does not influence our editorial content or rankings. Offers are subject to change—always read the operator's T&Cs before registering. 18+. Play responsibly. StopSpillet.dk | ROFUS.dk
          </p>
        </div>
      </div>
    </div>
  )
}

