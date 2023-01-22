import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

export function findByCss<T>(
  fixture: ComponentFixture<T>, path: string) {
  const debugEl = fixture.debugElement.query(By.css(path));
  if (!debugEl) throw new Error(`No element found for css selector ${path}`);
  return debugEl.nativeElement;
}

export function setInput<T>(
  fixture: ComponentFixture<T>,
  elementArg: HTMLInputElement|string,
  value: string) {
  const element = typeof elementArg === 'string' ? findByCss(fixture, elementArg) : elementArg;
  element.value = value;
  element.dispatchEvent(new Event('input'));
  fixture.detectChanges();
}
