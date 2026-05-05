"use client";

import {
  Children,
  PointerEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
  trackId: string;
};

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }

  return context;
}

type CarouselProviderProps = {
  children: ReactNode;
  index: number;
  onIndexChange: (newIndex: number) => void;
  disableDrag: boolean;
};

function CarouselProvider({
  children,
  index,
  onIndexChange,
  disableDrag,
}: CarouselProviderProps) {
  const [itemsCount, setItemsCount] = useState(0);
  const trackId = useId();

  useEffect(() => {
    if (!itemsCount || index <= itemsCount - 1) {
      return;
    }

    onIndexChange(itemsCount - 1);
  }, [index, itemsCount, onIndexChange]);

  const handleSetIndex = (newIndex: number) => {
    const boundedIndex = itemsCount
      ? Math.max(0, Math.min(newIndex, itemsCount - 1))
      : Math.max(0, newIndex);

    if (boundedIndex === index) {
      return;
    }

    onIndexChange(boundedIndex);
  };

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
        trackId,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

export type CarouselProps = {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
  ariaLabel?: string;
};

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
  ariaLabel = "Carousel",
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState(initialIndex);
  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex);
    }

    onIndexChange?.(newIndex);
  };

  return (
    <CarouselProvider
      index={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
    >
      <div
        className={cn("group relative", className)}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </CarouselProvider>
  );
}

export type CarouselNavigationProps = {
  className?: string;
  classNameButton?: string;
  alwaysShow?: boolean;
  previousLabel?: string;
  nextLabel?: string;
};

function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow = false,
  previousLabel = "Previous slide",
  nextLabel = "Next slide",
}: CarouselNavigationProps) {
  const { index, setIndex, itemsCount, trackId } = useCarousel();

  if (itemsCount < 2) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between px-2 md:px-3",
        className,
      )}
    >
      <button
        type="button"
        aria-label={previousLabel}
        aria-controls={trackId}
        className={cn(
          "pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/80 bg-[color:var(--surface-2)]/90 text-foreground shadow-soft backdrop-blur transition duration-200",
          alwaysShow ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          alwaysShow ? "disabled:opacity-40" : "group-hover:disabled:opacity-40",
          "hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--surface)]",
          classNameButton,
        )}
        disabled={index === 0}
        onClick={() => setIndex(index - 1)}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>

      <button
        type="button"
        aria-label={nextLabel}
        aria-controls={trackId}
        className={cn(
          "pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/80 bg-[color:var(--surface-2)]/90 text-foreground shadow-soft backdrop-blur transition duration-200",
          alwaysShow ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          alwaysShow ? "disabled:opacity-40" : "group-hover:disabled:opacity-40",
          "hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--surface)]",
          classNameButton,
        )}
        disabled={index === itemsCount - 1}
        onClick={() => setIndex(index + 1)}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

export type CarouselIndicatorProps = {
  className?: string;
  classNameButton?: string;
  getAriaLabel?: (index: number) => string;
};

function CarouselIndicator({
  className,
  classNameButton,
  getAriaLabel,
}: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex, trackId } = useCarousel();

  if (itemsCount < 2) {
    return null;
  }

  return (
    <div className={cn("mt-6 flex items-center justify-center", className)}>
      <div className="flex items-center gap-2">
        {Array.from({ length: itemsCount }, (_, indicatorIndex) => (
          <button
            key={indicatorIndex}
            type="button"
            aria-controls={trackId}
            aria-label={
              getAriaLabel?.(indicatorIndex) ?? `Go to slide ${indicatorIndex + 1}`
            }
            aria-pressed={index === indicatorIndex}
            onClick={() => setIndex(indicatorIndex)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              index === indicatorIndex
                ? "w-8 bg-[color:var(--accent)]"
                : "w-2.5 bg-white/25 hover:bg-white/40",
              classNameButton,
            )}
          />
        ))}
      </div>
    </div>
  );
}

export type CarouselContentProps = {
  children: ReactNode;
  className?: string;
};

function CarouselContent({ children, className }: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag, trackId } = useCarousel();
  const itemsLength = Children.count(children);
  const gestureStartRef = useRef<{ x: number; y: number } | null>(null);
  const translatePercentage = itemsLength ? (index * 100) / itemsLength : 0;

  useEffect(() => {
    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (disableDrag) {
      return;
    }

    gestureStartRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (disableDrag || !gestureStartRef.current) {
      return;
    }

    const deltaX = event.clientX - gestureStartRef.current.x;
    const deltaY = event.clientY - gestureStartRef.current.y;
    gestureStartRef.current = null;

    if (Math.abs(deltaX) <= Math.abs(deltaY) || Math.abs(deltaX) < 40) {
      return;
    }

    setIndex(index + (deltaX < 0 ? 1 : -1));
  };

  const handlePointerCancel = () => {
    gestureStartRef.current = null;
  };

  return (
    <div
      className={cn("overflow-hidden pb-1", className)}
    >
      <div
        id={trackId}
        className={cn(
          "flex touch-pan-y",
          !disableDrag && "select-none",
        )}
        style={{
          width: itemsLength ? `${itemsLength * 100}%` : "100%",
          transform: `translate3d(-${translatePercentage}%, 0, 0)`,
          transition: "transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {children}
      </div>
    </div>
  );
}

export type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemProps) {
  const { itemsCount } = useCarousel();

  return (
    <div
      className={cn("shrink-0 px-1 md:px-2", className)}
      style={{
        width: itemsCount ? `${100 / itemsCount}%` : "100%",
      }}
    >
      {children}
    </div>
  );
}

type IconProps = {
  className?: string;
};

function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
};
