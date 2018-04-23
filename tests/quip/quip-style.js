if (activeObject instanceof model.Folder) {
  // aoeu
}
if (activeObject instanceof model.Folder &&
        (activeObject.isStandardFolder() ||
        activeObject.isArchiveFolder() ||
        activeObject.isDesktopFolder() ||
        activeObject.isWorkgroupFolder() ||
        activeObject.isRootPersonalFolder())) {
    folderId = activeObject.id();
}


/** @override */
elements.client.editor.PlatformDocument.prototype.save = function(
      title, updateBundle, successCallback, errorCallback, synchronous) {
  shortcuts.add(
      events.KeyCode.R,
      shortcuts.Modifier.MOD,
      base.bind(function(target) {
          this.refreshFromServer_();
          return true;
      }, this));
  var slide = doc.createNewSectionAfter(
      beforeSection,
      proto.section.Section.Style.SLIDE_STYLE,
      true); // after root container
      var slashShortcutDesc = new shortcuts.Desc(
          events.KeyCode.FORWARD_SLASH, shortcuts.Modifier.NONE);


    const imageData = editor.image.getDisplayImageDataInContainer(
    displayScale * options.contentScale,
    pb,
    /** @type {{height: number, width: number}} */ (containerSize));
}

flat.components.FavoriteButton = React.createClass({
    mixins: [parts.mixins.ModelPropertyListener, parts.mixins.PureRenderMixin],
    propTypes: {
        thread: React.PropTypes.instanceOf(model.Thread).isRequired,
    },
    /**
     * @param {Event} e
     * @private
     */
    toggleStar_(e) {
        events.stopPropagation(e);
        e.preventDefault();
        const {thread} = this.props;
        if (thread.starredState().get()) {
            thread.unstar();
        } else {
            thread.star();
        }
    },
    render() {
        const {thread} = this.props;
        if (model.User.currentUser()) {
            const starred = thread.starredState().get();
            const icon = starred ? (
                <parts.icons.Starred />
            ) : (
                <parts.icons.Star />
            );
            return <parts.Tooltip
                text={starred ? _$("Favorited") : _$("Add to Favorites")}>
                <parts.Button
                    icon={icon}
                    selected={starred}
                    onClick={this.toggleStar_}/>
            </parts.Tooltip>;
        } else {
            return <div />;
        }
    },

    modelPropertiesForProps(props) {
        return [props.thread.starredState()];
    },
});
