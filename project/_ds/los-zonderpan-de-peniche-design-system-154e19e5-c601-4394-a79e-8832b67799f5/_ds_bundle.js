/* @ds-bundle: {"format":4,"namespace":"LosZonderPanDePenicheDesignSystem_154e19","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"GradientMesh","sourcePath":"components/signature/GradientMesh.jsx"},{"name":"MockupFrame","sourcePath":"components/signature/MockupFrame.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"PricingCard","sourcePath":"components/surfaces/PricingCard.jsx"},{"name":"PillTag","sourcePath":"components/tags/PillTag.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"dbb85ea214b4","components/actions/TextLink.jsx":"03600ce4cdc6","components/forms/TextInput.jsx":"4dbac2c064c3","components/media/Icon.jsx":"3e6740a4b3b2","components/navigation/Footer.jsx":"f458097a2eeb","components/navigation/NavBar.jsx":"93d0aa07850c","components/signature/GradientMesh.jsx":"eee52f0a5907","components/signature/MockupFrame.jsx":"39e0773f099c","components/surfaces/Card.jsx":"03bea80a58c5","components/surfaces/PricingCard.jsx":"8c892fd428ba","components/tags/PillTag.jsx":"024649bb29da","ui_kits/marketing/MarketingSite.jsx":"f814dbe91c92","ui_kits/tracker_app/TrackerApp.jsx":"3c37ac93c28c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LosZonderPanDePenicheDesignSystem_154e19 = window.LosZonderPanDePenicheDesignSystem_154e19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-sm)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  fontFamily: 'var(--font-core)',
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: 1,
  fontFeatureSettings: '"ss01"',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'background-color .16s ease, color .16s ease, border-color .16s ease'
};
const sizes = {
  md: {
    fontSize: 'var(--button-md-size)',
    padding: '8px 16px',
    minHeight: 'var(--control-min-h)'
  },
  sm: {
    fontSize: 'var(--button-sm-size)',
    padding: '8px 16px',
    minHeight: '32px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-fill)',
    color: 'var(--action-on-fill)'
  },
  secondary: {
    background: 'var(--canvas)',
    color: 'var(--primary)',
    borderColor: 'var(--primary)'
  },
  onDark: {
    background: 'var(--brand-dark-900)',
    color: 'var(--on-primary)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink)'
  }
};
const hovers = {
  primary: {
    background: 'var(--primary-deep)'
  },
  secondary: {
    background: 'var(--primary-bg-subdued-hover)'
  },
  onDark: {
    background: 'var(--ink)'
  },
  ghost: {
    background: 'var(--canvas-soft)'
  }
};
const pressed = {
  primary: {
    background: 'var(--action-fill-press)'
  },
  secondary: {
    background: 'var(--primary-bg-subdued-hover)',
    borderColor: 'var(--primary-press)',
    color: 'var(--primary-press)'
  },
  onDark: {
    background: '#000000'
  },
  ghost: {
    background: 'var(--hairline)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isPressed = false,
  fullWidth = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const showPressed = isPressed || active;
  const css = {
    ...base,
    ...(sizes[size] || sizes.md),
    ...(variants[variant] || variants.primary),
    ...(hover && !disabled && !showPressed ? hovers[variant] : null),
    ...(showPressed && !disabled ? pressed[variant] : null),
    ...(disabled ? {
      opacity: 0.4,
      cursor: 'not-allowed'
    } : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: css,
    href: Tag === 'a' ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline link on light surfaces — `link-on-light`. */
function TextLink({
  children,
  href = '#',
  size = 'md',
  emphasis = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: emphasis ? 400 : 300,
      fontSize: size === 'sm' ? 'var(--caption-size)' : 'var(--body-md-size)',
      lineHeight: 1.4,
      color: hover ? 'var(--primary-deep)' : 'var(--primary)',
      textDecoration: 'none',
      fontFeatureSettings: '"ss01"',
      transition: 'color .16s ease',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** `text-input` — 6px radius, 8px 12px padding, cool hairline that swaps to teal on focus. */
function TextInput({
  label,
  hint,
  value,
  onChange,
  placeholder,
  type = 'text',
  suffix,
  tabular = false,
  disabled = false,
  invalid = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 var(--caption-size)/var(--caption-lh) var(--font-core)',
      letterSpacing: 'var(--caption-ls)',
      color: 'var(--ink-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      background: disabled ? 'var(--canvas-soft)' : 'var(--canvas)',
      border: `1px solid ${invalid ? 'var(--ruby)' : focus ? 'var(--border-input-focus)' : 'var(--border-input)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '8px 12px',
      minHeight: 'var(--control-min-h)',
      transition: 'border-color .16s ease'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--ink)',
      fontFamily: 'var(--font-core)',
      fontWeight: 300,
      fontSize: tabular ? 'var(--body-tabular-size)' : 'var(--body-md-size)',
      letterSpacing: tabular ? 'var(--body-tabular-ls)' : 0,
      fontFeatureSettings: tabular ? '"tnum"' : '"ss01"'
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 var(--caption-size)/1.4 var(--font-core)',
      color: 'var(--ink-mute)',
      fontFeatureSettings: '"tnum"'
    }
  }, suffix) : null), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 var(--micro-size)/var(--micro-lh) var(--font-core)',
      color: invalid ? 'var(--ruby)' : 'var(--ink-mute)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/';

/**
 * Icon wrapper over the Lucide static set (CDN). Intentional addition — the brand
 * material ships no icon assets. Colour follows `currentColor`.
 */
function Icon({
  name,
  size = 18,
  strokeColor,
  style,
  ...rest
}) {
  const url = `url("${BASE}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    role: "presentation",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: strokeColor || 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/** `footer-light` — 4–6 link columns, caption type, muted ink. */
function Footer({
  columns = [],
  legal = '© los ZonderPan de Peniche',
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--canvas)',
      color: 'var(--ink-mute)',
      padding: 'var(--space-huge) var(--space-xl)',
      borderTop: '1px solid var(--hairline)',
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-huge)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 var(--heading-sm-size)/1.1 var(--font-core)',
      letterSpacing: '-0.3px',
      color: 'var(--ink)'
    }
  }, "los ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "ZonderPan"), " de Peniche"), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 var(--caption-size)/1.4 var(--font-core)',
      letterSpacing: 'var(--caption-ls)'
    }
  }, note) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: `repeat(${Math.max(columns.length, 1)},minmax(0,1fr))`,
      gap: 'var(--space-xl)'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 var(--micro-cap-size)/var(--micro-cap-lh) var(--font-core)',
      letterSpacing: 'var(--micro-cap-ls)',
      textTransform: 'uppercase',
      color: 'var(--ink-secondary)'
    }
  }, col.title), (col.links || []).map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: '400 var(--caption-size)/1.6 var(--font-core)',
      letterSpacing: 'var(--caption-ls)',
      color: 'var(--ink-mute)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      paddingTop: 'var(--space-xxl)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 var(--micro-size)/1.4 var(--font-core)'
    }
  }, legal)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** `nav-bar-on-mesh` — wordmark left, links centre, sign-in + filled pill right. */
function NavBar({
  brand = 'los ZonderPan de Peniche',
  links = [],
  activeLink,
  onNavigate,
  signInLabel = 'Sign in',
  ctaLabel = 'Start free',
  onSignIn,
  onCta,
  transparent = false,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xl)',
      background: transparent ? 'transparent' : 'var(--canvas)',
      color: 'var(--ink)',
      padding: 'var(--space-lg) var(--space-xl)',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-core)',
      boxShadow: transparent ? 'none' : 'var(--elev-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 var(--heading-sm-size)/1.1 var(--font-core)',
      letterSpacing: '-0.3px',
      whiteSpace: 'nowrap'
    }
  }, "los ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "ZonderPan"), " de Peniche"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xl)',
      flex: 1,
      justifyContent: 'center'
    }
  }, links.map(l => {
    const label = typeof l === 'string' ? l : l.label;
    const on = label === activeLink;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: typeof l === 'string' ? '#' : l.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(label);
        }
      },
      style: {
        font: '300 var(--body-md-size)/1.4 var(--font-core)',
        color: on ? 'var(--ink)' : 'var(--ink-mute-2)',
        textDecoration: 'none',
        paddingBottom: 2,
        borderBottom: on ? '1px solid var(--primary)' : '1px solid transparent',
        transition: 'color .16s ease'
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSignIn && onSignIn();
    },
    style: {
      font: '300 var(--body-md-size)/1.4 var(--font-core)',
      color: 'var(--ink-mute-2)',
      textDecoration: 'none'
    }
  }, signInLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/signature/GradientMesh.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Signature gradient-mesh backdrop — cream → amber → seafoam → teal → rose → magenta
 * washed across the upper third of a marketing surface. Level 3 depth.
 */
function GradientMesh({
  height = 460,
  children,
  blur = 40,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      isolation: 'isolate',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: `0 0 auto 0`,
      height,
      zIndex: 0,
      pointerEvents: 'none',
      background: 'var(--mesh-backdrop)',
      filter: `blur(${blur}px)`,
      transform: 'scale(1.08)',
      transformOrigin: 'top center',
      maskImage: 'linear-gradient(180deg,#000 0%,#000 62%,transparent 100%)',
      WebkitMaskImage: 'linear-gradient(180deg,#000 0%,#000 62%,transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { GradientMesh });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signature/GradientMesh.jsx", error: String((e && e.message) || e) }); }

// components/signature/MockupFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * `card-dashboard-mockup` chrome — the deep-charcoal faux product panel the brand
 * composites above the white canvas. 16px radius, Level 2 shadow, tabular figures.
 */
function MockupFrame({
  title,
  children,
  tone = 'dark',
  chrome = true,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? 'var(--brand-dark-900)' : 'var(--canvas)',
      border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--elev-2)',
      overflow: 'hidden',
      color: dark ? 'var(--on-primary)' : 'var(--ink)',
      fontFamily: 'var(--font-core)',
      fontFeatureSettings: '"tnum"',
      ...style
    }
  }, rest), chrome ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      padding: '10px var(--space-lg)',
      borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'var(--hairline)'}`,
      background: dark ? 'rgba(255,255,255,0.03)' : 'var(--canvas-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['var(--ruby)', 'var(--lemon)', 'var(--primary-soft)'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: c,
      opacity: 0.75
    }
  }))), title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 var(--micro-size)/1.4 var(--font-core)',
      color: dark ? 'rgba(255,255,255,0.55)' : 'var(--ink-mute)',
      marginLeft: 'var(--space-sm)'
    }
  }, title) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--card-pad-mockup)'
    }
  }, children));
}
Object.assign(__ds_scope, { MockupFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signature/MockupFrame.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  feature: {
    background: 'var(--canvas)',
    color: 'var(--ink)',
    border: '1px solid var(--hairline)',
    padding: 'var(--card-pad)',
    borderRadius: 'var(--radius-lg)'
  },
  pricing: {
    background: 'var(--canvas)',
    color: 'var(--ink)',
    border: '1px solid var(--hairline)',
    padding: 'var(--card-pad)',
    borderRadius: 'var(--radius-lg)'
  },
  pricingFeatured: {
    background: 'var(--brand-dark-900)',
    color: 'var(--on-primary)',
    border: '1px solid var(--brand-dark-900)',
    padding: 'var(--card-pad)',
    borderRadius: 'var(--radius-lg)'
  },
  cream: {
    background: 'var(--canvas-cream)',
    color: 'var(--ink)',
    border: '1px solid transparent',
    padding: 'var(--card-pad)',
    borderRadius: 'var(--radius-lg)'
  },
  mockup: {
    background: 'var(--canvas)',
    color: 'var(--ink)',
    border: '1px solid var(--hairline)',
    padding: 'var(--card-pad-mockup)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--elev-2)'
  }
};

/** `card-feature-light` / `card-pricing` / `card-pricing-featured` / `card-cream-band` / `card-dashboard-mockup`. */
function Card({
  children,
  variant = 'feature',
  elevated = false,
  style,
  ...rest
}) {
  const v = variants[variant] || variants.feature;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 300,
      fontSize: 'var(--body-md-size)',
      lineHeight: 1.4,
      fontFeatureSettings: variant === 'mockup' ? '"tnum"' : '"ss01"',
      ...v,
      ...(elevated && !v.boxShadow ? {
        boxShadow: 'var(--elev-1)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PricingCard.jsx
try { (() => {
/** `card-pricing` / `card-pricing-featured` composed: tier name, price, feature list, pinned CTA. */
function PricingCard({
  name,
  price,
  period = '/mo',
  blurb,
  features = [],
  cta = 'Start tracking',
  featured = false,
  onSelect,
  style
}) {
  const fg = featured ? 'var(--on-primary)' : 'var(--ink)';
  const mute = featured ? 'rgba(255,255,255,0.62)' : 'var(--ink-mute)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      background: featured ? 'var(--brand-dark-900)' : 'var(--canvas)',
      border: `1px solid ${featured ? 'var(--brand-dark-900)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--card-pad)',
      color: fg,
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '300 var(--heading-lg-size)/var(--heading-lg-lh) var(--font-core)',
      letterSpacing: 'var(--heading-lg-ls)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 var(--display-md-size)/var(--display-md-lh) var(--font-core)',
      letterSpacing: 'var(--display-md-ls)',
      fontFeatureSettings: '"tnum"'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 var(--caption-size)/1.4 var(--font-core)',
      color: mute
    }
  }, period)), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '300 var(--body-md-size)/1.4 var(--font-core)',
      color: featured ? 'rgba(255,255,255,0.78)' : 'var(--ink-secondary)'
    }
  }, blurb) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      flex: 1
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      font: '300 var(--body-md-size)/1.4 var(--font-core)',
      color: featured ? 'rgba(255,255,255,0.88)' : 'var(--ink-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: featured ? 'var(--primary-soft)' : 'var(--primary)'
    }
  }, "\u2014"), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'secondary',
    fullWidth: true,
    onClick: onSelect
  }, cta));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/tags/PillTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** `pill-tag-soft` — pale-teal eyebrow tag. */
function PillTag({
  children,
  tone = 'soft',
  style,
  ...rest
}) {
  const tones = {
    soft: {
      background: 'var(--tag-bg)',
      color: 'var(--tag-fg)'
    },
    outline: {
      background: 'var(--canvas)',
      color: 'var(--primary-deep)',
      border: '1px solid var(--primary)'
    },
    onDark: {
      background: 'rgba(255,255,255,0.10)',
      color: 'var(--primary-soft)'
    },
    neutral: {
      background: 'var(--canvas-soft)',
      color: 'var(--ink-mute)',
      border: '1px solid var(--hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-xs)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      font: '400 var(--micro-cap-size)/var(--micro-cap-lh) var(--font-core)',
      letterSpacing: 'var(--micro-cap-ls)',
      textTransform: 'uppercase',
      ...(tones[tone] || tones.soft),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { PillTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tags/PillTag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingSite.jsx
try { (() => {
const {
  Button,
  TextLink,
  PillTag,
  Card,
  PricingCard,
  NavBar,
  Footer,
  GradientMesh,
  MockupFrame,
  Icon,
  TextInput
} = window.LosZonderPanDePenicheDesignSystem_154e19;
const container = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--section-pad-x)'
};
function TrendSparkline({
  w = 380,
  h = 96,
  stroke = 'var(--primary-soft)'
}) {
  const pts = [82.9, 82.6, 82.7, 82.2, 81.9, 82.0, 81.5, 81.4, 80.9, 81.1, 80.6, 80.4];
  const min = 80.1,
    max = 83.1;
  const d = pts.map((p, i) => `${i / (pts.length - 1) * w},${h - (p - min) / (max - min) * h}`).join(' L ');
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts.map((p, i) => `${i / (pts.length - 1) * w},${h - (p - min) / (max - min) * h}`).join(' '),
    fill: "none",
    stroke: "rgba(255,255,255,0.18)",
    strokeWidth: "1",
    strokeDasharray: "3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M ${d}`,
    fill: "none",
    stroke: stroke,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: w,
    cy: h - (pts[pts.length - 1] - min) / (max - min) * h,
    r: "3.5",
    fill: stroke
  }));
}
function WeighInTable({
  dark = true
}) {
  const rows = [['Mon 12 Aug', '81.4', '81.9', '−0.11'], ['Tue 13 Aug', '80.8', '81.7', '−0.18'], ['Wed 14 Aug', '81.1', '81.6', '−0.14'], ['Thu 15 Aug', '80.6', '81.4', '−0.16']];
  const line = dark ? 'rgba(255,255,255,0.08)' : 'var(--hairline)';
  const mute = dark ? 'rgba(255,255,255,0.55)' : 'var(--ink-mute)';
  const fg = dark ? '#fff' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Date', 'Weight', '7-day avg', 'Δ / day'].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    className: "lz-micro-cap",
    style: {
      textAlign: i ? 'right' : 'left',
      color: mute,
      fontWeight: 400,
      padding: '0 0 8px'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      borderTop: `1px solid ${line}`
    }
  }, r.map((c, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    className: "lz-body-tabular",
    style: {
      padding: '9px 0',
      textAlign: i ? 'right' : 'left',
      color: i === 0 ? mute : i === 3 ? 'var(--primary-soft)' : fg
    }
  }, c))))));
}
function CompositeMockup() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 'var(--space-lg)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(MockupFrame, {
    title: "trend \u2014 last 90 days"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-display-md",
    style: {
      fontFeatureSettings: '"tnum"'
    }
  }, "80.4 ", /*#__PURE__*/React.createElement("span", {
    className: "lz-caption",
    style: {
      color: 'rgba(255,255,255,0.55)'
    }
  }, "kg")), /*#__PURE__*/React.createElement("span", {
    className: "lz-caption",
    style: {
      color: 'var(--primary-soft)',
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-down",
    size: 14
  }), "\u22120.14 / week")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0 20px'
    }
  }, /*#__PURE__*/React.createElement(TrendSparkline, null)), /*#__PURE__*/React.createElement(WeighInTable, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(MockupFrame, {
    title: "weigh-in",
    chrome: false,
    tone: "light",
    style: {
      boxShadow: 'var(--elev-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-micro-cap",
    style: {
      color: 'var(--primary-press)'
    }
  }, "This morning"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Weight",
    value: "80.6",
    suffix: "kg",
    tabular: true,
    readOnly: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    fullWidth: true
  }, "Save weigh-in"))), /*#__PURE__*/React.createElement(MockupFrame, {
    chrome: false,
    title: "",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-micro-cap",
    style: {
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Streak"), /*#__PURE__*/React.createElement("div", {
    className: "lz-display-lg",
    style: {
      marginTop: 8,
      fontFeatureSettings: '"tnum"'
    }
  }, "28 days"), /*#__PURE__*/React.createElement("div", {
    className: "lz-micro",
    style: {
      color: 'rgba(255,255,255,0.55)',
      marginTop: 6
    }
  }, "182 weigh-ins logged"))));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GradientMesh, {
    height: 620
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      paddingTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: ['Product', 'Pricing', 'Method'],
    activeLink: "Product",
    onNavigate: go,
    onCta: () => go('Pricing'),
    transparent: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      paddingTop: 'var(--space-huge)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(PillTag, null, "Weight tracking, quietly"), /*#__PURE__*/React.createElement("h1", {
    className: "lz-display-xxl",
    style: {
      margin: '20px auto 0',
      maxWidth: 760
    }
  }, "Weigh in. Then get on with your day."), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-lg",
    style: {
      margin: '20px auto 0',
      maxWidth: 520,
      color: 'var(--ink-secondary)'
    }
  }, "los ZonderPan de Peniche records one number a day and draws the trend through it. No streak guilt, no meal plans, no opinions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      justifyContent: 'center',
      marginTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('Pricing')
  }, "Start free"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('Method')
  }, "How the trend works"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      marginTop: 'var(--space-huge)'
    }
  }, /*#__PURE__*/React.createElement(CompositeMockup, null))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas-soft)',
      padding: 'var(--section-pad-y) 0',
      marginTop: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-micro-cap",
    style: {
      color: 'var(--primary-press)'
    }
  }, "What you get"), /*#__PURE__*/React.createElement("h2", {
    className: "lz-display-xl",
    style: {
      margin: '16px 0 var(--space-xxl)',
      maxWidth: 620
    }
  }, "Three numbers. That is the whole product."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-xl)'
    }
  }, [['scale', 'One weigh-in', 'Open the app, type a number, close the app. Nine seconds.'], ['chart-line', 'A seven-day line', 'Daily weight is noise. The average is the signal, and it is the only figure we headline.'], ['download', 'Your data, leaving', 'Every weigh-in exports to CSV. Tabular figures, no lock-in.']].map(([ic, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: "feature"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "lz-display-md",
    style: {
      marginTop: 'var(--space-lg)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-md",
    style: {
      margin: 'var(--space-md) 0 0',
      color: 'var(--ink-secondary)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "cream",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-huge)',
      alignItems: 'center',
      padding: 'var(--space-huge)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lz-micro-cap",
    style: {
      color: 'var(--lemon)'
    }
  }, "The method"), /*#__PURE__*/React.createElement("h3", {
    className: "lz-display-lg",
    style: {
      margin: '16px 0'
    }
  }, "A body is not a spreadsheet, but it does keep records."), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-md",
    style: {
      color: 'var(--ink-secondary)',
      margin: 0
    }
  }, "Water, salt and sleep move the daily number by a kilo either way. We smooth it, show the direction, and stay out of the way."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    onClick: () => go('Method'),
    emphasis: true
  }, "Read the method \u2192"))), /*#__PURE__*/React.createElement(MockupFrame, {
    title: "90-day trend",
    style: {
      background: 'var(--brand-dark-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 0 12px'
    }
  }, /*#__PURE__*/React.createElement(TrendSparkline, {
    h: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xl)'
    }
  }, [['Start', '82.9'], ['Now', '80.4'], ['Δ', '−2.5']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-micro-cap",
    style: {
      color: 'rgba(255,255,255,0.55)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "lz-body-tabular",
    style: {
      color: k === 'Δ' ? 'var(--primary-soft)' : '#fff',
      marginTop: 4
    }
  }, v)))))))));
}
function Pricing({
  go
}) {
  const [picked, setPicked] = React.useState('Steady');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GradientMesh, {
    height: 420
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      paddingTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: ['Product', 'Pricing', 'Method'],
    activeLink: "Pricing",
    onNavigate: go,
    transparent: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      paddingTop: 'var(--space-huge)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(PillTag, null, "Pricing"), /*#__PURE__*/React.createElement("h1", {
    className: "lz-display-xl",
    style: {
      margin: '20px auto 0',
      maxWidth: 640
    }
  }, "Cheaper than the scale you already own."), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-lg",
    style: {
      margin: '16px auto 0',
      maxWidth: 480,
      color: 'var(--ink-secondary)'
    }
  }, "Monthly, cancel in two clicks, export on the way out.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      marginTop: 'var(--space-huge)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Solo",
    price: "\u20AC0",
    blurb: "One body, one line.",
    features: ['Daily weigh-in', '7-day average', '90 days of history'],
    cta: picked === 'Solo' ? 'Selected' : 'Start free',
    onSelect: () => setPicked('Solo')
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Steady",
    price: "\u20AC6",
    blurb: "The whole trend, forever.",
    features: ['Everything in Solo', 'Unlimited history', 'CSV export', 'Morning reminder'],
    cta: picked === 'Steady' ? 'Selected' : 'Choose Steady',
    featured: true,
    onSelect: () => setPicked('Steady')
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Two",
    price: "\u20AC9",
    blurb: "Two people, two lines.",
    features: ['Two linked accounts', 'Separate trends', 'Shared export'],
    cta: picked === 'Two' ? 'Selected' : 'Choose Two',
    onSelect: () => setPicked('Two')
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Clinic",
    price: "\u20AC29",
    blurb: "For practices.",
    features: ['Up to 40 clients', 'Consent-gated access', 'Bulk CSV', 'Invoice billing'],
    cta: picked === 'Clinic' ? 'Selected' : 'Talk to us',
    onSelect: () => setPicked('Clinic')
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y-tight) 0 var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-xl)'
    }
  }, [['Do I need a smart scale?', 'No. Any scale and a keyboard.'], ['What happens if I skip a week?', 'The line skips with you. No streak to break.'], ['Can I get my numbers out?', 'CSV, any time, on every paid plan.'], ['Is my weight shared?', 'Never. Clinic access is consent-gated per client.']].map(([q, a]) => /*#__PURE__*/React.createElement(Card, {
    key: q,
    variant: "feature",
    style: {
      padding: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-heading-sm"
  }, q), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-md",
    style: {
      margin: '10px 0 0',
      color: 'var(--ink-secondary)'
    }
  }, a))))));
}
function Method({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GradientMesh, {
    height: 380
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      paddingTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: ['Product', 'Pricing', 'Method'],
    activeLink: "Method",
    onNavigate: go,
    transparent: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      paddingTop: 'var(--space-huge)',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(PillTag, null, "Method"), /*#__PURE__*/React.createElement("h1", {
    className: "lz-display-xl",
    style: {
      margin: '20px 0 0'
    }
  }, "What the line is doing"), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-lg",
    style: {
      margin: '20px 0 0',
      maxWidth: 560,
      color: 'var(--ink-secondary)'
    }
  }, "A daily weight is mostly water. A seven-day average is mostly you."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y-tight) 0 var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-huge)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)'
    }
  }, [['1', 'Weigh at the same hour', 'Before breakfast, after the bathroom, same scale. Consistency beats accuracy.'], ['2', 'Log the number as it is', 'No rounding down. The average absorbs a bad morning.'], ['3', 'Read the average, not the day', 'We headline the seven-day figure and the per-day delta. The daily dot stays small on purpose.']].map(([n, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-display-md",
    style: {
      color: 'var(--primary)',
      width: 40,
      flex: '0 0 40px',
      fontFeatureSettings: '"tnum"'
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lz-heading-md"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-md",
    style: {
      margin: '8px 0 0',
      color: 'var(--ink-secondary)'
    }
  }, b)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('Pricing')
  }, "Start free"))), /*#__PURE__*/React.createElement(MockupFrame, {
    title: "method \u2014 smoothing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 0 16px'
    }
  }, /*#__PURE__*/React.createElement(TrendSparkline, {
    h: 140
  })), /*#__PURE__*/React.createElement(WeighInTable, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      marginTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(PillTag, {
    tone: "onDark"
  }, "Daily dot"), /*#__PURE__*/React.createElement(PillTag, {
    tone: "onDark"
  }, "7-day line"))))));
}
function MarketingSite() {
  const [page, setPage] = React.useState('Product');
  const go = p => {
    setPage(p);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", null, page === 'Product' ? /*#__PURE__*/React.createElement(Home, {
    go: go
  }) : page === 'Pricing' ? /*#__PURE__*/React.createElement(Pricing, {
    go: go
  }) : /*#__PURE__*/React.createElement(Method, {
    go: go
  }), /*#__PURE__*/React.createElement(Footer, {
    note: "A weight tracker that keeps its opinions to itself.",
    columns: [{
      title: 'Product',
      links: ['Trend line', 'Weigh-in', 'CSV export', 'Reminders']
    }, {
      title: 'Company',
      links: ['About', 'Method', 'Contact']
    }, {
      title: 'Plans',
      links: ['Solo', 'Steady', 'Two', 'Clinic']
    }, {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Data export']
    }],
    legal: "\xA9 los ZonderPan de Peniche \xB7 Peniche, PT"
  }));
}
Object.assign(window, {
  MarketingSite,
  Home,
  Pricing,
  Method,
  CompositeMockup,
  TrendSparkline,
  WeighInTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingSite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tracker_app/TrackerApp.jsx
try { (() => {
const {
  Button,
  PillTag,
  Card,
  TextInput,
  Icon,
  MockupFrame,
  TextLink
} = window.LosZonderPanDePenicheDesignSystem_154e19;

/* Dashboard track flips polarity to a dark app shell (brand-dark-900 chrome, white panels inside). */
const DARK = 'var(--brand-dark-900)';
const LINE = 'rgba(255,255,255,0.08)';
const MUTE = 'rgba(255,255,255,0.55)';
const seed = [['Thu 15 Aug', 80.6, 81.4, -0.16], ['Wed 14 Aug', 81.1, 81.6, -0.14], ['Tue 13 Aug', 80.8, 81.7, -0.18], ['Mon 12 Aug', 81.4, 81.9, -0.11], ['Sun 11 Aug', 82.0, 82.0, -0.09], ['Sat 10 Aug', 81.7, 82.1, -0.12], ['Fri 09 Aug', 82.3, 82.2, -0.07]];
function Sidebar({
  view,
  setView
}) {
  const items = [['Today', 'scale'], ['Trend', 'chart-line'], ['History', 'calendar-days'], ['Settings', 'settings']];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flex: '0 0 232px',
      background: DARK,
      borderRight: `1px solid ${LINE}`,
      padding: 'var(--space-xl) var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-heading-sm",
    style: {
      color: '#fff',
      letterSpacing: '-0.3px'
    }
  }, "los ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "ZonderPan"), /*#__PURE__*/React.createElement("br", null), "de Peniche"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxs)'
    }
  }, items.map(([label, ic]) => {
    const on = view === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => setView(label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        textAlign: 'left',
        cursor: 'pointer',
        background: on ? 'rgba(255,255,255,0.07)' : 'transparent',
        border: '1px solid transparent',
        borderRadius: 'var(--radius-md)',
        padding: '10px var(--space-md)',
        minHeight: 40,
        color: on ? '#fff' : MUTE,
        font: '300 var(--body-md-size)/1.4 var(--font-core)',
        fontFeatureSettings: '"ss01"'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(PillTag, {
    tone: "onDark"
  }, "Steady plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      color: MUTE
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-round",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-caption"
  }, "Marta V."))));
}
function TopBar({
  title,
  onLog
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      padding: 'var(--space-lg) var(--app-pad)',
      borderBottom: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-heading-md",
    style: {
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      color: MUTE
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-caption"
  }, "Reminder 07:30")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onLog
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }), "Weigh in"));
}
function Stat({
  label,
  value,
  unit,
  delta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      border: `1px solid ${LINE}`,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--card-pad-mockup)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-micro-cap",
    style: {
      color: MUTE,
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-display-md",
    style: {
      color: '#fff',
      fontFeatureSettings: '"tnum"'
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    className: "lz-caption",
    style: {
      color: MUTE
    }
  }, unit) : null), delta ? /*#__PURE__*/React.createElement("div", {
    className: "lz-caption",
    style: {
      color: 'var(--primary-soft)',
      marginTop: 8,
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-down",
    size: 13
  }), delta) : null);
}
function Chart({
  rows,
  height = 200
}) {
  const pts = [...rows].reverse();
  const vals = pts.map(r => r[1]),
    avg = pts.map(r => r[2]);
  const min = Math.min(...vals, ...avg) - 0.4,
    max = Math.max(...vals, ...avg) + 0.4;
  const x = i => i / Math.max(pts.length - 1, 1) * 100;
  const y = v => height - (v - min) / (max - min) * height;
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: height,
    viewBox: `0 0 100 ${height}`,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, [0.25, 0.5, 0.75].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: "0",
    x2: "100",
    y1: height * g,
    y2: height * g,
    stroke: LINE,
    strokeWidth: "1",
    vectorEffect: "non-scaling-stroke"
  })), /*#__PURE__*/React.createElement("polyline", {
    points: pts.map((r, i) => `${x(i)},${y(r[1])}`).join(' '),
    fill: "none",
    stroke: "rgba(255,255,255,0.28)",
    strokeWidth: "1",
    strokeDasharray: "3 3",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts.map((r, i) => `${x(i)},${y(r[2])}`).join(' '),
    fill: "none",
    stroke: "var(--primary-soft)",
    strokeWidth: "2",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  }), pts.map((r, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(r[1]),
    r: "2",
    fill: "rgba(255,255,255,0.5)",
    vectorEffect: "non-scaling-stroke"
  })));
}
function Table({
  rows
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Date', 'Weight', '7-day avg', 'Δ / day'].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    className: "lz-micro-cap",
    style: {
      textAlign: i ? 'right' : 'left',
      color: MUTE,
      fontWeight: 400,
      padding: '0 0 10px'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      borderTop: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement("td", {
    className: "lz-body-tabular",
    style: {
      padding: '10px 0',
      color: MUTE
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    className: "lz-body-tabular",
    style: {
      padding: '10px 0',
      textAlign: 'right',
      color: '#fff'
    }
  }, r[1].toFixed(1)), /*#__PURE__*/React.createElement("td", {
    className: "lz-body-tabular",
    style: {
      padding: '10px 0',
      textAlign: 'right',
      color: '#fff'
    }
  }, r[2].toFixed(1)), /*#__PURE__*/React.createElement("td", {
    className: "lz-body-tabular",
    style: {
      padding: '10px 0',
      textAlign: 'right',
      color: r[3] < 0 ? 'var(--primary-soft)' : 'var(--ruby)'
    }
  }, (r[3] < 0 ? '−' : '+') + Math.abs(r[3]).toFixed(2))))));
}
function WeighInPanel({
  onSave
}) {
  const [w, setW] = React.useState('');
  const [note, setNote] = React.useState('');
  return /*#__PURE__*/React.createElement(Card, {
    variant: "feature",
    style: {
      padding: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-micro-cap",
    style: {
      color: 'var(--primary-press)'
    }
  }, "This morning"), /*#__PURE__*/React.createElement("div", {
    className: "lz-display-md",
    style: {
      marginTop: 'var(--space-md)'
    }
  }, "Type the number"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Weight",
    value: w,
    onChange: e => setW(e.target.value),
    suffix: "kg",
    tabular: true,
    placeholder: "80.6",
    hint: "Before breakfast, same scale."
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Note (optional)",
    value: note,
    onChange: e => setNote(e.target.value),
    placeholder: "Slept badly"
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disabled: !w,
    onClick: () => {
      onSave(parseFloat(w));
      setW('');
      setNote('');
    }
  }, "Save weigh-in")));
}
function Today({
  rows,
  onSave
}) {
  const last = rows[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Last weigh-in",
    value: last[1].toFixed(1),
    unit: "kg"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "7-day average",
    value: last[2].toFixed(1),
    unit: "kg",
    delta: "\u22120.16 / day"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Since start",
    value: "\u22122.5",
    unit: "kg"
  })), /*#__PURE__*/React.createElement(MockupFrame, {
    title: "trend \u2014 last 7 days",
    chrome: false,
    style: {
      background: 'rgba(255,255,255,0.04)',
      boxShadow: 'none',
      border: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-heading-sm",
    style: {
      color: '#fff'
    }
  }, "Trend"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(PillTag, {
    tone: "onDark"
  }, "7 d"), /*#__PURE__*/React.createElement(PillTag, {
    tone: "onDark"
  }, "Daily dot"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(Chart, {
    rows: rows
  }))), /*#__PURE__*/React.createElement(MockupFrame, {
    title: "history",
    chrome: false,
    style: {
      background: 'rgba(255,255,255,0.04)',
      boxShadow: 'none',
      border: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement(Table, {
    rows: rows.slice(0, 5)
  }))), /*#__PURE__*/React.createElement(WeighInPanel, {
    onSave: onSave
  }));
}
function Trend({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(MockupFrame, {
    title: "trend \u2014 90 days",
    chrome: false,
    style: {
      background: 'rgba(255,255,255,0.04)',
      boxShadow: 'none',
      border: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-huge)',
      marginBottom: 'var(--space-xl)'
    }
  }, [['Start', '82.9'], ['Now', rows[0][1].toFixed(1)], ['7-day avg', rows[0][2].toFixed(1)], ['Rate', '−0.14 / wk']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-micro-cap",
    style: {
      color: MUTE
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "lz-heading-md",
    style: {
      color: '#fff',
      marginTop: 6,
      fontFeatureSettings: '"tnum"'
    }
  }, v)))), /*#__PURE__*/React.createElement(Chart, {
    rows: rows,
    height: 260
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(MockupFrame, {
    title: "weekly",
    chrome: false,
    style: {
      background: 'rgba(255,255,255,0.04)',
      boxShadow: 'none',
      border: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement(Table, {
    rows: rows.slice(0, 4)
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "cream",
    style: {
      padding: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-micro-cap",
    style: {
      color: 'var(--lemon)'
    }
  }, "Reading the line"), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-md",
    style: {
      margin: '12px 0 0',
      color: 'var(--ink-secondary)'
    }
  }, "Four of the last seven daily numbers went up. The average went down. Read the average."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    emphasis: true
  }, "The method \u2192")))));
}
function History({
  rows
}) {
  return /*#__PURE__*/React.createElement(MockupFrame, {
    title: "all weigh-ins \u2014 182",
    chrome: false,
    style: {
      background: 'rgba(255,255,255,0.04)',
      boxShadow: 'none',
      border: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      marginBottom: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-caption",
    style: {
      color: MUTE
    }
  }, "Showing ", rows.length, " of 182"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "onDark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 14
  }), "Export CSV")), /*#__PURE__*/React.createElement(Table, {
    rows: rows
  }));
}
function Settings() {
  const [unit, setUnit] = React.useState('kg');
  const [remind, setRemind] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "feature",
    style: {
      padding: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-heading-sm"
  }, "Weigh-in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Goal weight",
    value: "79.0",
    suffix: unit,
    tabular: true,
    hint: "Used for the goal line only."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lz-caption",
    style: {
      color: 'var(--ink-secondary)',
      marginBottom: 8
    }
  }, "Unit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)'
    }
  }, ['kg', 'lb', 'st'].map(u => /*#__PURE__*/React.createElement(Button, {
    key: u,
    size: "sm",
    variant: u === unit ? 'primary' : 'secondary',
    onClick: () => setUnit(u)
  }, u)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lz-caption",
    style: {
      color: 'var(--ink-secondary)',
      marginBottom: 8
    }
  }, "Morning reminder"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: remind ? 'primary' : 'secondary',
    onClick: () => setRemind(true)
  }, "07:30"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: !remind ? 'primary' : 'secondary',
    onClick: () => setRemind(false)
  }, "Off"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "feature",
    style: {
      padding: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-heading-sm"
  }, "Your data"), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-md",
    style: {
      margin: '12px 0 var(--space-lg)',
      color: 'var(--ink-secondary)'
    }
  }, "182 weigh-ins since 14 Feb. Export any time; deletion is immediate and total."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Export CSV"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Delete account"))), /*#__PURE__*/React.createElement(Card, {
    variant: "pricingFeatured",
    style: {
      padding: 'var(--space-xl)',
      background: 'rgba(255,255,255,0.04)',
      border: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement(PillTag, {
    tone: "onDark"
  }, "Steady plan"), /*#__PURE__*/React.createElement("div", {
    className: "lz-display-md",
    style: {
      marginTop: 'var(--space-md)',
      fontFeatureSettings: '"tnum"'
    }
  }, "\u20AC6 ", /*#__PURE__*/React.createElement("span", {
    className: "lz-caption",
    style: {
      color: 'rgba(255,255,255,0.62)'
    }
  }, "/mo")), /*#__PURE__*/React.createElement("p", {
    className: "lz-body-md",
    style: {
      margin: '12px 0 var(--space-lg)',
      color: 'rgba(255,255,255,0.78)'
    }
  }, "Renews 3 Sep. Cancel in two clicks."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Manage billing"))));
}
function TrackerApp() {
  const [view, setView] = React.useState('Today');
  const [rows, setRows] = React.useState(seed);
  const save = w => {
    const avg = Number((rows.slice(0, 6).reduce((s, r) => s + r[1], w) / 7).toFixed(1));
    setRows([['Today', w, avg, Number((avg - rows[0][2]).toFixed(2))], ...rows]);
    setView('Today');
  };
  const body = view === 'Today' ? /*#__PURE__*/React.createElement(Today, {
    rows: rows,
    onSave: save
  }) : view === 'Trend' ? /*#__PURE__*/React.createElement(Trend, {
    rows: rows
  }) : view === 'History' ? /*#__PURE__*/React.createElement(History, {
    rows: rows
  }) : /*#__PURE__*/React.createElement(Settings, null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: DARK,
      color: '#fff',
      fontFeatureSettings: '"ss01"'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    setView: setView
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: view === 'Today' ? 'Thursday 15 August' : view,
    onLog: () => setView('Today')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--app-pad)',
      flex: 1
    }
  }, body)));
}
Object.assign(window, {
  TrackerApp,
  Sidebar,
  TopBar,
  Today,
  Trend,
  History,
  Settings,
  Chart,
  Table,
  WeighInPanel,
  Stat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tracker_app/TrackerApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.GradientMesh = __ds_scope.GradientMesh;

__ds_ns.MockupFrame = __ds_scope.MockupFrame;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.PillTag = __ds_scope.PillTag;

})();
